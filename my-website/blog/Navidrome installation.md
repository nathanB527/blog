---
slug: navidrome
title: Installing Navidrome on my home lab
authors: [Nathan]
tags: [Homelab]
---

# Disclaimer
Not a final blog post, just something from my notes thats in markdown to test out docusaurus

# Navidrome installation

Using debian linux

Got it onto proxmox by going to “local (proxmox)”, selecting iso’s, and pasting in the download link. I then setup a vm with 64gb storage 2 gb ram and 2 cores.

## Changing the Ip address

I needed to change the ip address so I

- nano /etc/network/interfaces

After changing what i thought would fix it, i broke dns resolution. I decided to switch to ubuntu after this because it seems like thats what most people use.

# Ubuntu time….

Decided to try out [ubuntu server](https://ubuntu.com/download/server), it seems appropriate for the task.

After installing the ubuntu server, i installed docker with:

`sudo apt update`  
`sudo apt install docker.io docker-compose`  
`sudo systemctl enable docker`  
`sudo usermod -aG docker $USER`

Next up was setting a static ip so i could ssh into the vm. Ubuntu servers use netplan for networking.

- nano /etc/netplan/00-installer-config.yaml

Had to make a config

![](files/019bbe8d-7bc4-768f-8aec-7a8549984c2e/image.png)

After that came making the docker-compose.yml file.

`services:`  
`navidrome:`  
`image: deluan/navidrome:latest`  
`container_name: navidrome`  
`ports:`  
`- 4533:4533`  
`restart: unless-stopped`  
`# Optional: put your config options customization here. Examples:`  
`# ND_LOGLEVEL: debug`  
`volumes:`  
`- ./navidrome/data:/data`  
`- /mnt/music:/music`  
`networks:`  
`- media-network`

`lidarr:`  
`image: lscr.io/linuxserver/lidarr:latest`  
`container_name: lidarr`  
`environment:`  
`- PUID=1000`  
`- PGID=1000`  
`- TZ=Etc/UTC`  
`volumes:`  
`- ./lidarr/config:/config`  
`- /mnt/music:/music`  
`- /mnt/downloads:/downloads`  
`ports:`  
`- 8686:8686`  
`restart: unless-stopped`  
`networks:`  
`- media-network`

`networks:`  
`media-network:`  
`driver: bridge`

I found these configs using docker compose configs for respective services (lidarr and navidrome). After defining the config make sure to make the appropriate directories and then run

- docker-compose up -d

Can check status with docker-compose ps

## Qbittorrent

I also had to add qbittorrent to the docker compose.

user: admin


i added this to lidarrI

## Indexer

Now to actually index for torrents i needed to add an indexer

Decided to use prowlarr, aggregates a lot of the services into one. once again, added to docker compose files.

### Careful considerations, and not wanting to get a notice from my isp

until i get a proper vpn, im not going to take the risk torrenting. Instead, im utilizing soulseek to download the files and using the scp (secure file copy) command on linux to transfer my files.

scp -r complete/shy/\* [nathan@192.168.4.101](mailto:nathan@192.168.4.101):/mnt/music/
