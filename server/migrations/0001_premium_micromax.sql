DO $$ BEGIN
 CREATE TYPE "public"."account_type" AS ENUM('Admin', 'User');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."order_status" AS ENUM('Pending', 'Paid', 'Done', 'Cancelled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
