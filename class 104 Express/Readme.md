#### How to host Node.js apps on Ubuntu

### step 1 - Installing Node.js
```curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\sudo apt-get install -y node.js
```

Now install build-essential
```
sudo apt-get install build-essential
```


#### step 2 - Create a sample Node.js app
you can also use own app if you want to host it.otherwise if you are just trying out, you can use a sample app.

### step 3 - install pm2 & launch your app
install pm2 package which is a process manager for Node.js application
```

sudo npm install -g pm2
```

Now launch your app using this command
```
pm2 start index.js
```

### step 4 - Install nginx
Nginx is a web server which we will be using as a proxy
```
sudo apt install nginx
```

Now edit the file at /etc/nginx/sites.available/default using following command
```
sudo nano /etc/nginx/sites-available/default
``` 

we want this file to look like this:
```

. . .
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
. . .     
```

### step Test and restart nginx
Test and rstart nginx using following commands
```
sudo nginx -t
```
Now restart using:
```
sudo systemctl restart nginx
```