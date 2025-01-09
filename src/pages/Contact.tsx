import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  // Mengambil teks dari form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mendapatkan elemen form dengan type assertion ke HTMLFormElement
    const form = e.target as HTMLFormElement;

    // Akses elemen form dengan type assertion ke HTMLInputElement untuk input dan textarea
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phoneNumber = (
      form.elements.namedItem("phoneNumber") as HTMLInputElement
    ).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Hello, my name is ${name}. I am reaching out to you regarding: ${message} (Phone: ${phoneNumber})`;

    // Buat link WhatsApp
    const whatsappLink = `https://wa.me/6289647643221?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Arahkan ke WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset form
    form.reset();

    // Tampilkan toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible via WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen bg-coffee-dark pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center animate-fade-down">
            <MessageSquare className="w-6 h-6 text-coffee-accent" />
            <h1 className="text-4xl font-bold text-coffee-cream">Contact Us</h1>
          </div>

          <div className="glass-card p-8 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-coffee-cream mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-coffee-medium/50 border-coffee-accent/20 text-coffee-cream placeholder:text-foreground/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-coffee-cream mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Your phone number"
                  className="bg-coffee-medium/50 border-coffee-accent/20 text-coffee-cream placeholder:text-foreground/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-coffee-cream mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="bg-coffee-medium/50 border-coffee-accent/20 text-coffee-cream placeholder:text-foreground/50 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-coffee-accent text-coffee-dark hover:bg-coffee-accent/90 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
