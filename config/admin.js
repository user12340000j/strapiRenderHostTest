module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '271b3bfb2e104f90f69291152e79a7e0'),
  },
});
