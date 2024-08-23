"use client";
import React from "react";
import Confirmation from "@/components/checkout/confirmation/Confirmation";

interface ConfirmationPageProps {
  params: {
    id: string;
  };
}

export default function ConfirmationPage({ params }: ConfirmationPageProps) {
  const { id } = params;

  return (
    <div>
      <Confirmation id={id} />
    </div>
  );
}
