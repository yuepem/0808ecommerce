ALTER TABLE "cartItems" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "cartItems" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "orderItems" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "orderItems" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "orderItems" ALTER COLUMN "order_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();