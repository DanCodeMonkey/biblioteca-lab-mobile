import { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const MODES = {
  foco: 25 * 60,
  pausa: 5 * 60,
};

export default function Estudos() {
  const [mode, setMode] = useState<"foco" | "pausa">("foco");
  const [seconds, setSeconds] = useState(MODES.foco);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current!);
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [running]);

  const switchMode = (m: "foco" | "pausa") => {
    setRunning(false);
    setMode(m);
    setSeconds(MODES[m]);
  };

  const reset = () => {
    setRunning(false);
    setSeconds(MODES[mode]);
  };

  const pad = (n: number) => String(n).padStart(2, "0");
  const display = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`;

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>Cantinho de Estudos</Text>
        <Text style={styles.subtitle}>
          Tecnologias, recursos e anotações de aprendizado.
        </Text>
      </View>

      {/* Pomodoro */}
      <View style={styles.profileCard}>
        <Text style={styles.name}>Pomodoro</Text>
        <Text style={styles.role}>
          {mode === "foco" ? "Foco — 25 min" : "Pausa — 5 min"}
        </Text>

        {/* Seletor de modo */}
        <View style={styles.modeRow}>
          <Pressable
            style={[styles.modeBtn, mode === "foco" && styles.modeBtnActive]}
            onPress={() => switchMode("foco")}
          >
            <Text style={[styles.modeBtnText, mode === "foco" && styles.modeBtnTextActive]}>
              Foco
            </Text>
          </Pressable>
          <Pressable
            style={[styles.modeBtn, mode === "pausa" && styles.modeBtnActive]}
            onPress={() => switchMode("pausa")}
          >
            <Text style={[styles.modeBtnText, mode === "pausa" && styles.modeBtnTextActive]}>
              Pausa
            </Text>
          </Pressable>
        </View>

        {/* Timer */}
        <Text style={styles.timer}>{display}</Text>

        {/* Controles */}
        <View style={styles.controls}>
          <Pressable style={styles.btnSecondary} onPress={reset}>
            <Text style={styles.btnSecondaryText}>Resetar</Text>
          </Pressable>
          <Pressable
            style={[styles.btnPrimary, running && styles.btnPause]}
            onPress={() => setRunning((r) => !r)}
          >
            <Text style={styles.btnPrimaryText}>
              {running ? "Pausar" : "Iniciar"}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* resto do conteúdo da tela abaixo... */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FA" },
  header: {
    backgroundColor: "#263238",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  logo: { color: "#FFFFFF", fontSize: 28, fontWeight: "bold" },
  subtitle: { color: "#CFD8DC", fontSize: 15, marginTop: 6 },
  profileCard: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  name: { fontSize: 26, fontWeight: "bold", color: "#263238" },
  role: {
    fontSize: 15,
    color: "#1976D2",
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 18,
  },
  modeRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  modeBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1976D2",
    alignItems: "center",
  },
  modeBtnActive: { backgroundColor: "#1976D2" },
  modeBtnText: { color: "#1976D2", fontWeight: "bold", fontSize: 14 },
  modeBtnTextActive: { color: "#FFFFFF" },
  timer: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#263238",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 28,
  },
  controls: { flexDirection: "row", gap: 12 },
  btnPrimary: {
    flex: 1,
    backgroundColor: "#1976D2",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  btnPause: { backgroundColor: "#546E7A" },
  btnPrimaryText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 15 },
  btnSecondary: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#546E7A",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  btnSecondaryText: { color: "#546E7A", fontWeight: "bold", fontSize: 15 },
});