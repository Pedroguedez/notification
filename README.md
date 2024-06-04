# Função: requestNotificationPermission()

## Descrição:
Esta função solicita permissão ao usuário para enviar notificações. Ela exibe uma notificação ao usuário se a permissão for concedida, informando-o de que está ocioso há mais de 30 minutos e deve registrar suas atividades.

### Propósito:
#### 1. Verificação de Permissão: A função verifica se o navegador suporta Service Workers e a API de Notificação antes de tentar enviar notificações.

#### 2. Solicitação de Permissão: Ela solicita permissão ao usuário para enviar notificações usando Notification.requestPermission().

#### 3. Exibição de Notificação: Se a permissão for concedida, a função exibe uma notificação ao usuário informando que está ocioso há mais de 30 minutos.

### Uso de Recursos:
#### Notification API: Usa a API de Notificação para solicitar permissão e exibir notificações ao usuário.
#### Service Worker: A notificação é exibida através do Service Worker, que permite que a aplicação continue funcionando mesmo quando está em segundo plano.
#### Parâmetros:
Nenhum.

#### Retorno:
Nenhum.

### Exceções:
Error: Lançada se a permissão de notificação não for concedida.
Uso:
javascript
```
requestNotificationPermission();
```
Exemplo:
```
try {
  await requestNotificationPermission();
} catch (error) {
  console.error('Erro ao solicitar permissão de notificação:', error.message);
}
```
