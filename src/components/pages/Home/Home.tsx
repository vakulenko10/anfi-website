import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  useForm,
  FormProvider,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Form = FormProvider

const Home = () => {
  
  return (
    <div>
      <Card>
      Home
      </Card>
    </div>
  )
}



export default Home
