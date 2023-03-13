FROM amd64/node:18.14.0-alpine
# RUN apk update
# RUN apk add bash

WORKDIR /app

COPY . .

RUN npm install

ENV AI_URL="http://texasai:8000/"

EXPOSE 3000

CMD ["npm", "run", "start"]
# CMD /bin/bash