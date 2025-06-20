import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Laptop,
  Monitor,
  Headphones,
  Camera,
  Speaker,
  Watch,
  Gamepad2,
  Tablet,
  Tv,
  Printer,
  HardDrive,
  Cpu,
  Battery,
  Wifi,
  Router,
  Cable,
  Wrench,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Service = {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType;
  price: number;
  features: string[];
};

const services: Service[] = [
  {
    id: 1,
    name: "Device Repair",
    description: "Expert repair services for all your devices.",
    icon: Wrench,
    price: 50,
    features: ["Diagnosis", "Part replacement", "Software fix"],
  },
  {
    id: 2,
    name: "Data Recovery",
    description: "Recover your lost data from any device.",
    icon: HardDrive,
    price: 100,
    features: ["Hard drive recovery", "SSD recovery", "USB recovery"],
  },
  {
    id: 3,
    name: "Network Setup",
    description: "Set up your home or office network.",
    icon: Router,
    price: 80,
    features: ["Router setup", "Wifi configuration", "Network security"],
  },
  {
    id: 4,
    name: "Software Installation",
    description: "Install any software on your device.",
    icon: Cpu,
    price: 30,
    features: ["Operating system installation", "Application installation"],
  },
  {
    id: 5,
    name: "Virus Removal",
    description: "Remove viruses and malware from your device.",
    icon: Battery,
    price: 40,
    features: ["Virus scan", "Malware removal", "System cleanup"],
  },
  {
    id: 6,
    name: "Smart Home Setup",
    description: "Set up your smart home devices.",
    icon: Wifi,
    price: 120,
    features: ["Smart device installation", "Smart device configuration"],
  },
];

const Services = () => {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const { toast } = useToast();

  const toggleService = (id: number) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((serviceId) => serviceId !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const handleCheckout = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service to proceed.",
      });
      return;
    }

    toast({
      title: "Checkout",
      description: `You have selected ${selectedServices.length} services for a total of $${calculateTotalPrice()}.`,
    });
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container grid items-center justify-center gap-6 pt-2 md:pt-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <Badge variant="secondary">Our Services</Badge>
            <h1 className="text-center font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              What We Offer
            </h1>
            <p className="max-w-[85%] text-center leading-relaxed text-muted-foreground sm:text-lg">
              We offer a wide range of services to meet your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id}>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <service.icon className="size-5" />
                      <h2 className="text-lg font-semibold">{service.name}</h2>
                    </div>
                    <span className="text-sm text-muted-foreground">${service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => toggleService(service.id)}
                  >
                    {selectedServices.includes(service.id) ? (
                      <>
                        <CheckCircle className="mr-2 size-4" />
                        Selected
                      </>
                    ) : (
                      "Select Service"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
