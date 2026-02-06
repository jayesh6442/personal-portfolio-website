# -----------------------------
# Base
# -----------------------------
FROM node:20-bookworm AS base
WORKDIR /app
ENV NODE_ENV=production

# -----------------------------
# Dependencies
# -----------------------------
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# -----------------------------
# Builder
# -----------------------------
FROM base AS builder
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# -----------------------------
# Runtime (Small + Secure)
# -----------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Non-root user (security)
RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -u 1001

# Copy only what runtime needs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
