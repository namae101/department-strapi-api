module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: env('SMTP_HOST','smtp.gmail.com'), //SMTP Host
      port: env('SMTP_PORT',465), //SMTP Port
      secure: true,
      username: env('EMAIL','user@gmail.com'),
      password: env('EMAIL_PASSWORD','password'),
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: env('EMAIL','user@gmail.com'),
      replyTo: env('EMAIL','user@gmail.com'),
    },
  },
});
