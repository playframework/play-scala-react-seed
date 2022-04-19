FROM hseeberger/scala-sbt:8u312_1.6.2_2.12.15
EXPOSE 3000
EXPOSE 9000
COPY . /opt
RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
WORKDIR /opt
ENTRYPOINT ["sbt", "run"]