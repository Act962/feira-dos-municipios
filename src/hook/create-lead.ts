"use client";

import { toast } from "sonner";

type Payload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  terms: boolean;
  cpfOrCnpg?: string | undefined;
};

type getLead = {
  phone: string;
  crmId: string;
};

type Lead = {
  name: string;
  phone: string;
  email?: string;
};

export function useLead() {
  const BASE_URL = "https://nasago.bubbleapps.io/api/1.1/wf";

  function formatedFormat(phone: string) {
    const phoneFormatted = "55" + phone.trim().replace(/[\(\)\-\s]/g, "");

    return phoneFormatted;
  }

  async function createLead(payload: Payload) {
    try {
      const object = {
        companyId: "1716245972374x830198274999121300",
        name: payload.name,
        email: payload.email,
        contato: formatedFormat(payload.phone),
        crmId: "1758886652596x381069927323009000",
        statusCrmId: "1758886653797x651206453468866800",
        tagId: "1758886793020x996979269303533600",
      };

      const response = await fetch(`${BASE_URL}/create_lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });

      if (response.ok) {
        toast.success("Sucesso", {
          description: "Cadastro feito com sucesso!",
        });
      }
    } catch (error) {
      toast.error("Erro ao cadastrar. Tente mais tarde novamente.");
      throw error;
    }
  }

  async function getLead({ phone, crmId }: getLead) {
    const response = await fetch(`${BASE_URL}/get_lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: formatedFormat(phone),
        crmId,
      }),
    }).then((res) => res.json());

    return response;
  }

  return {
    createLead,
    getLead,
  };
}
