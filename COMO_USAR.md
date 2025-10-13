# 🚀 Exaustech Site - Guia Rápido

## ✅ O que foi criado

Seu projeto agora tem um **site completo** para monitoramento de temperatura, umidade e RPM!

### 📁 Arquivos principais:
- **`src/main.cpp`** - Código principal com dados simulados (pronto para usar)
- **`src/Config.h/cpp`** - Configurações globais
- **`src/Sensores.h/cpp`** - Para sensores reais (DHT22 + RPM)
- **`src/main_com_sensores.cpp`** - Exemplo com sensores reais

## 🔧 Como usar AGORA

### 1. **Configure seu WiFi**
Edite `src/Config.h` nas linhas:
```cpp
#define WIFI_SSID "SeuWiFi"        // ← Seu WiFi aqui
#define WIFI_PASSWORD "SuaSenha"   // ← Sua senha aqui
```

### 2. **Faça o upload**
```bash
# No terminal do VS Code:
pio run --target upload
```

### 3. **Veja o IP do ESP8266**
```bash
pio device monitor
```
Procure por: `WiFi conectado! IP: 192.168.x.x`

### 4. **Acesse o site**
Abra o navegador e digite o IP mostrado: `http://192.168.x.x`

## 🎉 O que você verá

### Interface Web com:
- **📊 Dashboard moderno** com cartões coloridos
- **🌡️ Temperatura** em tempo real
- **💧 Umidade** com indicadores visuais
- **⚙️ RPM** do sistema de ventilação
- **📈 Gráfico histórico** dos últimos dados
- **🚦 Status inteligente** (Normal/Atenção/Crítico)

### Recursos especiais:
- ✨ **Responsivo** - funciona em celular/tablet
- 🔄 **Atualização automática** a cada 2 segundos
- 🎨 **Design profissional** com animações
- 📱 **API REST** em `/api/dados`

## 🔧 Para usar sensores reais

1. **Conecte os sensores:**
   - DHT22 no pino 2
   - Sensor RPM no pino 3

2. **Renomeie os arquivos:**
   ```bash
   # Renomear para backup
   mv src/main.cpp src/main_simulado.cpp
   
   # Ativar versão com sensores
   mv src/main_com_sensores.cpp src/main.cpp
   ```

3. **Recompile e envie:**
   ```bash
   pio run --target upload
   ```

## 📱 Como acessar

### No computador:
- Chrome, Firefox, Edge, Safari

### No celular/tablet:
- Conecte na mesma rede WiFi
- Digite o IP no navegador
- Interface se adapta automaticamente

### API para outros sistemas:
```javascript
// Exemplo de uso da API
fetch('http://IP_DO_ESP8266/api/dados')
  .then(response => response.json())
  .then(data => {
    console.log('Temperatura:', data.temperatura);
    console.log('Umidade:', data.umidade);
    console.log('RPM:', data.rpm);
  });
```

## 🎯 Próximos passos

1. **Teste básico**: Use os dados simulados primeiro
2. **Conecte sensores**: Para dados reais
3. **Personalize**: Cores, limites, intervalos
4. **Expanda**: Adicione mais sensores

## 🆘 Precisa de ajuda?

### Problemas comuns:

**ESP8266 não conecta ao WiFi:**
- Verifique SSID e senha em `Config.h`
- Certifique-se que a rede está disponível

**Site não abre:**
- Confirme o IP no monitor serial
- Tente `http://` antes do IP

**Dados não atualizam:**
- Verifique conexão WiFi
- Abra F12 no navegador para ver erros

---

## 🎉 Parabéns!

Seu sistema Exaustech está pronto! 🏭✨

Acesse o site e veja seus dados em tempo real com uma interface profissional!