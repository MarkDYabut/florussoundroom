import { Column, Heading, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const menuItems = [
  { name: "Florus Tee Shirt 2025", price: "$30" },
  { name: "Florus Tee Shirt 2026", price: "$40" },
  { name: "Flowers Over Friends Hat 2025", price: "$30" },
  { name: "Bevvy", price: "$7" },
  { name: "Red Bull", price: "$7" },
  { name: "Water", price: "$4" },
  { name: "Soda", price: "$4" },
];

export default function MenuPage() {
  return (
    <Column fillWidth paddingTop="l" gap="l" horizontal="center" style={{ minHeight: "100vh" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/menu"
        title="Menu"
        description="FLORUS essentials and drinks menu."
        image={`/api/og/generate?title=${encodeURIComponent("Menu")}`}
        author={{
          name: person.name,
          url: `${baseURL}/menu`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

    <Heading variant="display-default-l">Menu</Heading>
    <Text variant="body-default-l" onBackground="neutral-weak">
        FLORUS essentials and drinks.
    </Text>

      <Column maxWidth="m" fillWidth gap="m" horizontal="center" style={{ textAlign: "center" }}>
        <Column
          fillWidth
          gap="m"
          horizontal="center"
          style={{
            maxWidth: 620,
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "20px",
            padding: "2rem",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {menuItems.map((item) => (
            <Column key={item.name} fillWidth gap="2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "0.75rem" }}>
              <Column fillWidth horizontal="space-between" style={{ flexDirection: "row", gap: "1rem" }}>
                <Text variant="heading-default-m" style={{ fontWeight: 600, flex: 1, textAlign: "left" }}>
                  {item.name}
                </Text>
                <Text variant="heading-default-m" style={{ fontWeight: 600, textAlign: "right", whiteSpace: "nowrap" }}>
                  {item.price}
                </Text>
              </Column>
            </Column>
          ))}
        </Column>


                <img
          src="/logos/flower-1.png"
          alt="FLORUS logo"
          style={{
            width: "96px",
            height: "96px",
            objectFit: "contain",
            animation: "spin 15s linear infinite",
            display: "block",
            marginBottom: "0.5rem",
          }}
        />
      </Column>
    </Column>
  );
}
