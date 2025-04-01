test:
    echo "http://127.0.0.1:9192"
    nix-shell -p caddy --run "caddy file-server --listen 127.0.0.1:9192"
