import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Desenvolvedor() {
  const openLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error("Erro ao abrir link:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>Sobre o Desenvolvedor</Text>

        <Text style={styles.subtitle}>
          Desenvolvimento, tecnologia e aprendizado.
        </Text>
      </View>

      {/* Apresentação */}
      <View style={styles.profileCard}>
        <Text style={styles.name}>Daniel Fernando</Text>

        <Text style={styles.role}>
          Estudante de Desenvolvimento de Software
        </Text>

        <Text style={styles.bio}>
          Sou estudante de Desenvolvimento de Software Multiplataforma, com
          interesse em desenvolvimento web, automação de processos e
          tecnologia.
        </Text>

        <Text style={styles.bio}>
          Gosto de transformar problemas do dia a dia em soluções simples e
          funcionais, buscando sempre aprender novas tecnologias através de
          projetos práticos.
        </Text>
      </View>

      {/* Tecnologias */}
      <Text style={styles.sectionTitle}>Tecnologias</Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.icon}>{"</>"}</Text>

          <Text style={styles.cardTitle}>Desenvolvimento</Text>

          <Text style={styles.cardDescription}>
            JavaScript, TypeScript, React, Next.js e Node.js.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>{"{}"}</Text>

          <Text style={styles.cardTitle}>Back-end</Text>

          <Text style={styles.cardDescription}>
            APIs REST, Express, SQL e MongoDB.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>◆</Text>

          <Text style={styles.cardTitle}>Ferramentas</Text>

          <Text style={styles.cardDescription}>
            Git, GitHub, Docker e ferramentas de desenvolvimento.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>⚙</Text>

          <Text style={styles.cardTitle}>Interesses</Text>

          <Text style={styles.cardDescription}>
            Automação, infraestrutura, suporte técnico e resolução de
            problemas.
          </Text>
        </View>
      </View>

      {/* Formação */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Formação</Text>

        <Text style={styles.infoTitle}>
          Desenvolvimento de Software Multiplataforma
        </Text>

        <Text style={styles.infoText}>FATEC Votorantim</Text>

        <Text style={styles.infoText}>
          Formação voltada ao desenvolvimento de aplicações web, mobile,
          banco de dados e integração de sistemas.
        </Text>
      </View>

      {/* Contato */}
      <View style={styles.contactCard}>
        <Text style={styles.sectionTitle}>Contato</Text>

        <Pressable
          style={styles.contactButton}
          onPress={() => openLink("https://github.com/DanCodeMonkey")}
        >
          <Text style={styles.contactIcon}>◆</Text>

          <View>
            <Text style={styles.contactLabel}>GitHub</Text>

            <Text style={styles.contactText}>
              github.com/DanCodeMonkey
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.contactButton}
          onPress={() =>
            openLink("https://www.linkedin.com/in/daniel-fernando-2a6ab213a/")
          }
        >
          <Text style={styles.contactIcon}>in</Text>

          <View>
            <Text style={styles.contactLabel}>LinkedIn</Text>

            <Text style={styles.contactText}>
              linkedin.com/in/daniel-fernando-2a6ab213a
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.contactButton}
          onPress={() => openLink("mailto:dancodemonkey66@gmail.com")}
        >
          <Text style={styles.contactIcon}>@</Text>

          <View>
            <Text style={styles.contactLabel}>E-mail</Text>

            <Text style={styles.contactText}>
              dancodemonkey66@gmail.com
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvedor em formação
        </Text>

        <Text style={styles.footerSubtext}>
          Aprendendo, desenvolvendo e evoluindo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  header: {
    backgroundColor: "#263238",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#CFD8DC",
    fontSize: 15,
    marginTop: 6,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#263238",
  },

  role: {
    fontSize: 15,
    color: "#1976D2",
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 18,
  },

  bio: {
    fontSize: 14,
    lineHeight: 21,
    color: "#546E7A",
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#263238",
    marginHorizontal: 20,
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  icon: {
    fontSize: 25,
    color: "#1976D2",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#263238",
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: "#78909C",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#37474F",
    marginBottom: 5,
  },

  infoText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#78909C",
    marginBottom: 8,
  },

  contactCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#1976D2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    padding: 13,
    borderRadius: 8,
    marginBottom: 10,
  },

  contactIcon: {
    width: 40,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976D2",
    textAlign: "center",
    marginRight: 10,
  },

  contactLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#546E7A",
    marginBottom: 3,
  },

  contactText: {
    fontSize: 14,
    color: "#1976D2",
  },

  footer: {
    alignItems: "center",
    paddingVertical: 30,
  },

  footerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#546E7A",
  },

  footerSubtext: {
    fontSize: 12,
    color: "#90A4AE",
    marginTop: 4,
  },
});