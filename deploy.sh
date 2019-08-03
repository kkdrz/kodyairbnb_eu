#!/bin/bash

gatsby build

prod_site_dir="/var/www/kodyairbnb_eu"
dev_site_dir="/home/konrad/projects/kodyairbnb/public"
ssh_connection="root@212.237.11.153"

ssh $ssh_connection "sudo rm -rf $prod_site_dir && sudo mkdir $prod_site_dir"


echo "Cleaned directory: $prod_site_dir"

(
	cd $dev_site_dir;
	scp -r * "$ssh_connection:$prod_site_dir"
)


echo "Copied $dev_site_dir to $ssh_connection:$prod_site_dir"

ssh $ssh_connection "sudo systemctl restart nginx.service"

echo "Restarted NGINX"