FROM node:lts-alpine

# creating app directory
RUN mkdir -p /usr/app/
WORKDIR /usr/app/

RUN npm install -g @angular/cli

# install chromium
ENV CHROME_BIN=/usr/bin/chromium-browser
RUN apk add --no-cache chromium udev ttf-freefont

# fix permission for global install of npm
RUN chown -R node:node /usr/local/lib/node_modules /usr/local/bin

CMD ["tail", "-f", "/dev/null"]
