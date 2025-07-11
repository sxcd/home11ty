---
layout: post.njk
title: Look mom, Minecraft's back in 2024
date: 2024-08-10
tags: ["post", "minecraft", "gaming", "server"]
excerpt: "I'm reliving my childhood. This time though? I have money and IT skillz. The perfect combination to have my own self hosted Minecraft server."
---

I'm reliving my childhood. This time though? I have money and IT skillz. The perfect combination to have my own self hosted Minecraft server. Them kids be jealous.

**The server is live on:** 

[playground.shanen.works](http://playground.shanen.works/ "Minecraft Server")

*Note: I had to implement crazy geo restrictions and the AuthMe plugin as my server got **griefed** within days of being up. So, not open to registrations through minecraft unfortunately :(  But you can send me a mail and I'll have you on board!*

I will update the steps one by one when I get time, but at a high level, here's everything

Step 0: Have a VPS. I have a pretty standard spec VPS that I'm using for other stuff too. You need at least 1.5+ gb RAM for it to work rightly, and an okayish CPU

Step 1: SSH into your VPS (DUH) : `ssh your_username@host_ip_address`

Step 2:  Install the latest version of Java

`sudo apt update && sudo apt install default-jdk`

Check Java version with `java -version`

Step 3: Install Java on Almalinux/CentOS


(I'll update the rest soon)

![Minecraft Server Setup](/images/minecraft-server.png)




