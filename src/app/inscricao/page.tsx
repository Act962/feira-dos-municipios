"use client";

import { Footer } from "@/components/footer";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { applyMask } from "@/lib/mask-phone";
import { applyCpfCnpjMask } from "@/lib/maks-cpf-or-cnpj";
import { Checkbox } from "@/components/ui/checkbox";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLead } from "@/hook/create-lead";

const formData = z.object({
  name: z.string().min(1, { error: "Campo obrigatório" }),
  email: z.email({ error: "E-mail inválido" }),
  phone: z.string().min(14, { error: "Campo obrigatório" }),
  city: z.string().min(1, { error: "Campo obrigatório" }),
  cpfOrCnpg: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    error: "Você deve aceitar os termos e condições",
  }),
});

type FormData = z.infer<typeof formData>;

export default function SignupPage() {
  const navigate = useRouter();
  const { createLead } = useLead();
  const {
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(formData),
    defaultValues: {
      terms: false,
    },
  });
  const [isCreated, setIsCreated] = useTransition();
  const termsValue = watch("terms");

  function onSubmit(data: FormData) {
    setIsCreated(async () => {
      await createLead(data).then(() => {
        reset();
        navigate.replace("/");
      });
    });
  }

  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      <Image
        src="/cacto.png"
        width={580}
        height={440}
        alt="Button"
        className="absolute bg-contain -bottom-0 right-0 w-[180px] lg:w-[400px] -scale-x-100"
        priority
      />

      <div />

      <div className="relative mx-auto w-full max-w-[532px]  rounded-xl px-4 sm:px-8 py-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={145}
          height={120}
          className="mx-auto w-auto h-auto"
        />

        <div className="mt-6">
          <h1 className="font-black text-xl">Garanta sua vaga hoje mesmo</h1>
          <span className="text-xs">
            Informe suas informações abaixo e faça parte com a gente
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-2">
          <div>
            <label htmlFor="name" className="text-sm font-bold">
              Nome *
            </label>
            <Input
              placeholder="Nome completo"
              {...register("name")}
              id="name"
            />
            {errors?.name?.message && (
              <ErrorMessage message={errors.name.message} />
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-bold">
              E-mail *
            </label>
            <Input placeholder="E-mail" {...register("email")} id="email" />
            {errors?.email?.message && (
              <ErrorMessage message={errors?.email.message} />
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-bold">
              Telefone *
            </label>
            <Input
              placeholder="(99) 9999-9999"
              {...register("phone")}
              onChange={(e) => {
                const masked = applyMask(e.target.value);
                setValue("phone", masked);
              }}
              id="phone"
            />
            {errors?.phone?.message && (
              <ErrorMessage message={errors.phone.message} />
            )}
          </div>

          <div>
            <label htmlFor="city" className="text-sm font-bold">
              Cidade *
            </label>
            <Input placeholder="Teresina" {...register("city")} id="city" />
            {errors?.city?.message && (
              <ErrorMessage message={errors.city.message} />
            )}
          </div>

          <div>
            <label htmlFor="cpfOrCnpg" className="text-sm font-bold">
              CPF/CNPJ <small>(opcional)</small>
            </label>
            <Input
              placeholder="000.000.000-00"
              {...register("cpfOrCnpg")}
              onChange={(e) => {
                const masked = applyCpfCnpjMask(e.target.value);
                setValue("cpfOrCnpg", masked);
              }}
              id="cpfOrCnpg"
            />
            {errors?.cpfOrCnpg?.message && (
              <ErrorMessage message={errors.cpfOrCnpg.message} />
            )}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Checkbox
                checked={termsValue}
                onCheckedChange={(checked) => setValue("terms", !!checked)}
                id="terms"
                className="cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm font-bold cursor-pointer"
              >
                Aceito os termos e condições
              </label>
            </div>
            {errors?.terms?.message && (
              <ErrorMessage message={errors.terms.message} />
            )}
          </div>

          <button
            disabled={isCreated}
            type="submit"
            className="w-full text-white bg-foreground px-4 py-2 rounded-md hover:bg-foreground/90 transition-opacity ease-linear duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isCreated ? "Carregando..." : "Confirmar"}
          </button>
        </form>
      </div>

      <Footer />
    </main>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return <span className="text-xs text-red">{message}</span>;
}
