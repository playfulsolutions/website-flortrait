module.exports = {
  apps: [{
    name: "pfsweb",
    script: "./web.js",
    watch: true,
    exec_mode: "cluster",
    instances: 2,
    env: {
      "NODE_ENV": "development"
    },
    env_production: {
      "NODE_ENV": "production"
    }
  }
  ]
};
