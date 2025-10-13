# Exaustech Site - Monitor de Temperatura, Umidade e RPM

Este projeto cria um site web para monitoramento em tempo real de temperatura, umidade e RPM usando ESP8266 (NodeMCU v2).

## 🚀 Características

- **Interface Web Responsiva**: Acesso via navegador em qualquer dispositivo
- **Monitoramento em Tempo Real**: Dados atualizados a cada 2 segundos
- **Gráficos Históricos**: Visualização dos últimos 20 pontos de dados
- **Status Inteligente**: Indicadores visuais de status (Normal/Atenção/Crítico)
- **API REST**: Endpoint JSON para integração com outros sistemas
- **Design Moderno**: Interface limpa e profissional

## 📋 Pré-requisitos

- NodeMCU v2 (ESP8266)
- Sensores de temperatura e umidade (ex: DHT22)
- Sensor de RPM (ex: encoder óptico)
- Rede WiFi

## ⚙️ Configuração

### 1. Configurar WiFi

Edite o arquivo `src/Config.h` e altere as credenciais do WiFi:

```cpp
#define WIFI_SSID "SeuWiFi"
#define WIFI_PASSWORD "SuaSenha"
```

### 2. Conectar Sensores

O código atual usa valores simulados. Para usar sensores reais, modifique a função `lerSensores()` em `main.cpp`:

```cpp
void lerSensores() {
  // Exemplo com DHT22
  // tem_atual = dht.readTemperature();
  // hum_atual = dht.readHumidity();
  
  // Exemplo com sensor de RPM
  // rpm_atual = lerRPM();
}
```

### 3. Compilar e Enviar

```bash
# Compilar o projeto
pio run

# Enviar para o ESP8266
pio run --target upload

# Monitorar saída serial
pio device monitor
```

## 🌐 Uso

1. **Conecte o ESP8266** à sua rede WiFi
2. **Abra o Monitor Serial** para ver o IP atribuído
3. **Acesse no navegador**: `http://IP_DO_ESP8266`
4. **Monitore os dados** em tempo real

### Endpoints Disponíveis

- **`/`** - Página principal do monitor
- **`/api/dados`** - API JSON com os dados atuais

Exemplo de resposta da API:
```json
{
  "temperatura": 25,
  "umidade": 65,
  "rpm": 1200,
  "timestamp": 123456789
}
```

## 📊 Interface do Site

### Dashboard Principal
- **Cartões de Dados**: Exibem valores atuais com ícones coloridos
- **Status Visuais**: Indicadores de Normal/Atenção/Crítico
- **Gráfico Histórico**: Linha temporal dos últimos dados

### Recursos Visuais
- **Design Responsivo**: Adapta-se a smartphones e tablets
- **Tema Moderno**: Gradientes e efeitos visuais
- **Animações Suaves**: Transições e hover effects
- **Ícones Intuitivos**: Representação visual clara dos dados

## 🔧 Personalização

### Limites de Alerta

Modifique os valores de alerta no JavaScript da página principal:

```javascript
// Função para determinar status
function getStatus(valor, min, max) {
    if (valor < min * 0.8 || valor > max * 1.2) return 'critico';
    if (valor < min * 0.9 || valor > max * 1.1) return 'alerta';
    return 'normal';
}
```

### Intervalo de Atualização

Altere a frequência de atualização dos dados:

```javascript
// Atualizar dados a cada X milissegundos
setInterval(atualizarDados, 2000); // 2 segundos
```

### Cores e Estilo

Modifique as cores no CSS da página:

```css
.temperatura .card-value { color: #ff6b6b; } /* Temperatura */
.umidade .card-value { color: #4ecdc4; }    /* Umidade */
.rpm .card-value { color: #45b7d1; }        /* RPM */
```

## 🔍 Solução de Problemas

### ESP8266 não conecta ao WiFi
- Verifique as credenciais em `Config.h`
- Certifique-se que a rede está disponível
- Verifique a força do sinal WiFi

### Dados não atualizam
- Verifique a conexão de rede
- Abra o console do navegador (F12) para ver erros
- Verifique se o ESP8266 está respondendo

### Performance lenta
- Reduza a frequência de atualização
- Verifique a qualidade da conexão WiFi
- Monitore o uso de memória do ESP8266

## 📱 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Smartphone
- **Sistemas**: Windows, macOS, Linux, Android, iOS

## 🔒 Segurança

⚠️ **Importante**: Este é um servidor web básico sem autenticação. Para uso em produção:

- Implemente autenticação de usuário
- Use HTTPS com certificados SSL
- Configure firewall adequado
- Limite acesso à rede local

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar ideias

---

**Desenvolvido para Exaustech** 🏭