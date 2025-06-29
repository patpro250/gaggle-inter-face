# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine AS base

# ------------------ DEPS STAGE ------------------
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm install

# ------------------ BUILD STAGE ------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ------------------ RUNTIME STAGE ------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup app && adduser -S -G app app

# ✅ Copy required files for standalone build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/required-server-files.json ./

# ✅ Copy .env or any runtime config if needed
# COPY --from=builder /app/.env ./

USER app

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
