# Alterações no Sistema de Configuração

## Data: 11 de outubro de 2025

### Melhorias Implementadas

#### 1. Pré-preenchimento de Campos WiFi na Interface

**Problema:** Os campos de SSID e senha WiFi (tanto STA quanto AP) ficavam vazios quando o usuário abria as configurações, mesmo quando já existiam valores salvos no `config.json`.

**Solução:**
- Adicionadas as variáveis `staSsid` e `staPass` no arquivo `app.js` (linha ~87-88)
- Modificada a função `updateConfigView()` para preencher automaticamente os campos de WiFi com os valores do `config.json`
- Sistema de "dirty flag" implementado para não sobrescrever campos que o usuário já começou a editar
- Endpoint GET `/api/config` agora retorna também as credenciais WiFi:
  - `wifi_sta_ssid`
  - `wifi_sta_password`
  - `wifi_ap_ssid`
  - `wifi_ap_password`
  - `wifi_mode_ap`

**Arquivos Modificados:**
- `data/app.js`: Adicionadas variáveis e lógica de preenchimento
- `src/web/WebHandlers.cpp`: Endpoint GET `/api/config` expandido

#### 2. Valores Padrão de Config.cpp Como Fallback

**Problema:** Quando o `config.json` não existia ou estava incompleto, o sistema não tinha valores de fallback consistentes.

**Solução:**
- As variáveis definidas em `Config.cpp` agora servem como valores padrão
- A função `loadConfig()` em `WiFiManager.cpp` foi modificada para:
  1. Tentar carregar valores do `config.json` (formato preferencial)
  2. Se falhar, tentar carregar do formato legacy `wifi_config.txt`
  3. Se ambos falharem, usar os valores padrão definidos em `Config.cpp`
- Valores padrão sempre são inicializados no construtor `WiFiManager()`

**Hierarquia de Configuração:**
```
1. config.json (primeira prioridade - valores dinâmicos salvos pelo usuário)
   ↓ (se não existir ou falhar)
2. wifi_config.txt (segunda prioridade - formato legacy)
   ↓ (se não existir ou falhar)
3. Config.cpp (valores padrão hardcoded - sempre disponíveis)
```

**Arquivos Modificados:**
- `src/network/WiFiManager.cpp`: Lógica de fallback aprimorada
- `src/core/Config.cpp`: Valores padrão documentados

### Valores Padrão Definidos em Config.cpp

```cpp
// WiFi
const char* DEFAULT_WIFI_SSID = "SeuWiFi";
const char* DEFAULT_WIFI_PASSWORD = "SuaSenha";
String wifi_ssid_ap = "Exaustech_AP";
String wifi_password_ap = "12345678";

// Sensores
const uint8_t DHT_PIN = 2;        // D4 no NodeMCU
const uint8_t DHT_TYPE = DHT22;
const uint8_t RPM_PIN = 14;       // D5 no NodeMCU

// Limites de Segurança
const int TEMP_MIN_SAFE = 0;
const int TEMP_MAX_SAFE = 60;
const int HUM_MIN_SAFE = 0;
const int HUM_MAX_SAFE = 100;
const int RPM_MIN_SAFE = 0;
const int RPM_MAX_SAFE = 5000;
```

### Comportamento Esperado

1. **Primeira Execução (sem config.json):**
   - Sistema usa valores de `Config.cpp`
   - Interface mostra "SeuWiFi" e "SuaSenha" nos campos STA
   - Interface mostra "Exaustech_AP" e "12345678" nos campos AP

2. **Após Salvar Configurações:**
   - `config.json` é criado/atualizado com os valores do usuário
   - Valores salvos têm prioridade sobre os padrões

3. **Ao Abrir Interface:**
   - Campos são preenchidos com valores do `config.json`
   - Se usuário começar a digitar, o campo é marcado como "dirty" e não será sobrescrito por atualizações automáticas

### Testando as Mudanças

1. **Teste de Preenchimento Automático:**
   ```
   - Acesse a interface
   - Abra Configurações → Wi-Fi
   - Campos STA e AP devem estar preenchidos
   ```

2. **Teste de Valores Padrão:**
   ```
   - Delete o arquivo /config.json do LittleFS
   - Reinicie o ESP8266
   - Verifique se os valores padrão de Config.cpp aparecem
   ```

3. **Teste de Dirty Flag:**
   ```
   - Abra as configurações de WiFi
   - Comece a digitar em um campo
   - Atualizações automáticas não devem sobrescrever o campo
   ```

### Próximos Passos Sugeridos

1. Considerar adicionar um endpoint `/api/defaults` que retorna todos os valores padrão
2. Implementar um botão "Restaurar Padrões" na interface
3. Adicionar validação de formato nos campos WiFi
4. Salvar histórico de configurações para rollback

### Notas de Compatibilidade

- ✅ Compatível com versões anteriores do firmware
- ✅ Formato `wifi_config.txt` ainda suportado (legacy)
- ✅ Não quebra configurações existentes
- ✅ `config.json` é criado/atualizado automaticamente ao salvar

### Segurança

⚠️ **IMPORTANTE:** As senhas WiFi são transmitidas e armazenadas em texto claro. Para ambientes de produção, considere:
- Implementar HTTPS
- Criptografar senhas no LittleFS
- Adicionar autenticação básica nas rotas de API
