# 🔧 Correção: Intervalo de Monitoramento

## ❌ Problema Identificado

Mesmo configurando o intervalo de monitoramento para 60 segundos na interface web, o Serial Monitor continuava mostrando leituras dos sensores muito mais frequentemente (praticamente contínuas).

### Causa Raiz

O `loop()` principal em `main.cpp` estava chamando `readSensors()` **continuamente** sem verificar o `monitor_interval`:

```cpp
// CÓDIGO ANTIGO (PROBLEMÁTICO)
void loop() {
  server.handleClient();
  readSensors();  // ❌ Chamado a cada ciclo do loop (~milhares de vezes por segundo)
  yield();
}
```

## ✅ Solução Implementada

Adicionei controle de tempo no `loop()` para respeitar o `monitor_interval` configurado pelo usuário:

```cpp
// CÓDIGO NOVO (CORRIGIDO)
void loop() {
  if (captivePortal) {
    captivePortal->handleClient();
  } else {
    server.handleClient();
  }
  
  // ✅ Ler sensores apenas no intervalo configurado
  unsigned long currentMillis = millis();
  if (currentMillis - lastSensorRead >= monitor_interval) {
    lastSensorRead = currentMillis;
    readSensors();
  }
  
  yield();
}
```

### Como Funciona

1. **Variável `monitor_interval`**: Configurável via interface web (1000-60000ms)
2. **Variável `lastSensorRead`**: Armazena timestamp da última leitura
3. **Verificação de intervalo**: Só executa `readSensors()` quando o tempo decorrido ≥ `monitor_interval`

## 📊 Resultado Esperado

| Intervalo Configurado | Frequência de Leitura | Serial Monitor |
|----------------------|----------------------|----------------|
| 1000ms (1s)         | 1x por segundo       | ~60 linhas/min |
| 4000ms (4s - padrão)| 1x a cada 4 segundos | ~15 linhas/min |
| 60000ms (60s)       | 1x por minuto        | 1 linha/min    |

## 🚀 Como Aplicar a Correção

### 1. Fechar Serial Monitor (IMPORTANTE!)
Se estiver monitorando a porta COM, feche o Serial Monitor:
- VS Code: Feche a janela do terminal de monitoramento
- PlatformIO: Clique no ícone "Close Monitor"

### 2. Upload do Firmware

```powershell
# Fazer upload do firmware corrigido
pio run --target upload --environment nodemcuv2

# Aguarde a mensagem "SUCCESS"
```

### 3. Reabrir Serial Monitor

```powershell
# Abrir monitor serial para verificar
pio device monitor --environment nodemcuv2 --baud 115200
```

### 4. Testar na Interface Web

1. Acesse a interface web do ESP8266
2. Vá em **Configurações → Sistema → Monitoramento**
3. Configure o intervalo (ex: 60000ms = 60 segundos)
4. Clique em **"Salvar Intervalo"**
5. Observe o Serial Monitor - as leituras devem aparecer a cada 60 segundos

## 🧪 Validação

### No Serial Monitor, você verá:

```
T: 25°C, H: 60%, RPM: 1200
[60 segundos de pausa]
T: 25°C, H: 61%, RPM: 1205
[60 segundos de pausa]
T: 26°C, H: 60%, RPM: 1198
```

### Na Interface Web:

- Os valores são atualizados conforme o intervalo configurado no frontend
- Frontend usa `currentMonitorInterval` para fazer polling via `/api/dados`
- Backend lê sensores conforme `monitor_interval`

## 📝 Variáveis Relacionadas

| Variável | Arquivo | Tipo | Descrição |
|----------|---------|------|-----------|
| `monitor_interval` | Config.cpp | unsigned long | Intervalo backend (ms) |
| `currentMonitorInterval` | app.js | number | Intervalo frontend (ms) |
| `lastSensorRead` | main.cpp | unsigned long | Timestamp última leitura |

## ⚙️ Valores Padrão

- **Mínimo**: 1000ms (1 segundo)
- **Padrão**: 4000ms (4 segundos)
- **Máximo**: 60000ms (60 segundos)

## 🔍 Troubleshooting

### Problema: Ainda vejo leituras muito rápidas

**Solução**: Verifique se o firmware foi realmente atualizado
```powershell
# Recompile e force upload
pio run --target upload --environment nodemcuv2 --upload-port COM4
```

### Problema: Erro "Permission Denied" no upload

**Solução**: Feche todas as conexões COM4
1. Feche Serial Monitor
2. Feche Arduino IDE se estiver aberto
3. Feche Putty/TeraTerm se estiver usando
4. Tente novamente

### Problema: Interface não respeita intervalo

**Solução**: Limpe o cache do navegador
1. Pressione `Ctrl+F5` para reload forçado
2. Ou limpe cache: `Ctrl+Shift+Del`
3. Recarregue `http://<IP_DO_ESP8266>`

## 📈 Estatísticas da Compilação

```
RAM:   [====      ]  41.4% (33.936 / 81.920 bytes)
Flash: [====      ]  35.6% (372.203 / 1.044.464 bytes)
Status: ✅ SUCCESS
```

## ✅ Checklist de Testes

- [ ] Compilação sem erros
- [ ] Upload bem-sucedido
- [ ] Serial Monitor mostra intervalo correto
- [ ] Interface permite alterar intervalo
- [ ] Intervalo salvo persiste após reinício
- [ ] Frontend sincroniza com backend
- [ ] Logs aparecem conforme esperado

---

**Data da correção**: 11 de outubro de 2025  
**Versão do firmware**: v1.1 (com controle de intervalo)  
**Impacto**: Redução drástica no uso de CPU e Serial spam
