FROM golang:1.12.0-alpine3.9 as builder
WORKDIR /app
COPY main.go .
RUN go build .

FROM scratch
COPY --from=builder /app .
CMD ["./app"]
