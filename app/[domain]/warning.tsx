"use client";
import React, { useEffect, useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Warning = () => {
    const [open, setOpen] = useState(true);

  return(
    <div>
        <Dialog open={open} onOpenChange={()=>setOpen(false)}>
          <DialogContent>
            <h1 style={{color:'#81a6f9'}}><b>Aviso!</b></h1>
            <p>
                O <i>fearnot.social</i> não está mais disponível para registro de novos usuários.
                <br/><br/>
                O domínio <i>fearnot.social</i> será desativado no dia
                <span style={{color:'#81a6f9'}}> 03 de Setembro de 2025</span>
                , após essa data o domínio não será renovado.
                <br/>
                No momento, os usuários que contém o <i>fearnot.social</i> no
                arroba do BlueSky já <b>não estão mais disponíveis</b> e deverão ficar como inválido.
                <br/><br/>
                Recomendo que mudem o arroba de volta para @<i>seunome</i>.bsky.social
                <br/>
                Voce encontrará como mudar pelo bluesky em:<br/>
                <i>{`Configurações -> Conta -> Nome de usuário`}</i>
            </p>
          </DialogContent>
        </Dialog>
      </div>
  )
}

export default Warning;