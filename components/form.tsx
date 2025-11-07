"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import ContainerBox from "./ContainerBox";
import { TypographyH3 } from "./Typography";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.email("กรุณากรอกอีเมลให้ถูกต้อง"),
  subject: z
    .string()
    .min(2, "หัวเรื่องต้องมีอย่างน้อย 2 ตัวอักษร")
    .max(50, "หัวเรื่องยาวเกิน 50 ตัวอักษร"),
  description: z
    .string()
    .min(2, "รายละเอียดต้องมีอย่างน้อย 2 ตัวอักษร")
    .max(255, "รายละเอียดต้องไม่เกิน 255 ตัวอักษร"),
});

export default function ProfileForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await axios.post("/api/send", values);
      console.log(res);
      if (res.status === 200 && res.statusText === "OK") {
        toast.success("ส่งข้อความสำเร็จ");
        form.reset();
      } else {
        toast.error("ส่งไม่สำเร็จ");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="my-10 space-y-5"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
    >
      <motion.div variants={itemVariants}>
        <ContainerBox addClassName="max-w-xl mt-10 bg-muted/30 rounded-2xl p-10 text-center">
          <div className="mb-5">
            <TypographyH3>กรอกข้อมูลติดต่อ</TypographyH3>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>อีเมล</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>หัวเรื่อง</FormLabel>
                    <FormControl>
                      <Input placeholder="หัวข้อเรื่อง" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>รายละเอียด</FormLabel>
                    <FormControl>
                      <Textarea placeholder="รายละเอียดเพิ่มเติม" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>
                คุณสามารถกรอกข้อมูลส่ง หรือ ติดต่อผมทางเบอร์โทรศัพท์
                085-855-4668 ได้ทันที
              </FormDescription>
              <Button
                disabled={loading}
                className="w-full cursor-pointer"
                type="submit"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    กำลังส่ง
                  </>
                ) : (
                  "ส่งข้อความ"
                )}
              </Button>
            </form>
          </Form>
        </ContainerBox>
      </motion.div>
    </motion.div>
  );
}
