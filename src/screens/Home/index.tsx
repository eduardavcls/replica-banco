
import React from 'react';
import { StyleSheet, Text, View, Image ,ScrollView} from 'react-native';
import boleto from "../../assets/boleto.png";
import dinheiro from "../../assets/dinheiro.png";
import Logo from "../../assets/logo.png";
import Mastercard from "../../assets/mastercard.png";
import pix from "../../assets/pix.png";
import Setting from "../../assets/setting.png";
import Wallet from "../../assets/Wallet.png";
import mobile from "../../assets/mobile.png"
import transferencia from "../../assets/transferencia.png"

export function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={Logo} />
          <Image source={Setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={Mastercard} />
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Maria Eduarda</Text>
            <View />
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={Wallet} />
          </View>
          <Text style={styles.cardDetailsTextValue}>R$250,76</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>
        <ScrollView
          style={styles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={boleto} />
            <Text style={styles.footerCardText}>Pagar um boleto</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardText}>Fazer um depósito</Text>
          </View>
         <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer uma transferência</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer uma recarga</Text>
          </View>

        </ScrollView>

        <View style={styles.cardFinal}>
            <Image source={Wallet}/>
            <Text style={styles.cardFinalText}>Caixinhas                                                                            R$50,00</Text>
           
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    paddingTop: 32,
  },
  footerText: {
    marginLeft: 50,
    color: "#FFF",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
  footerCard: {
    marginTop: 30,
    marginLeft: 8,
    width: 110,
    height: 127,
    elevation: 5,
    borderRadius: 27,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 13,
  },
  footerCardText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "600",
  },
  cardFinal: {
  padding: 20,
    width: "90%",
    height: 70,
    borderRadius: 20,
    marginTop : -100,
    marginLeft: 20,
    elevation: 1,
    backgroundColor: "#414345"
  },
  cardFinalText: {
fontSize: 12,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 20,
 },

 
 
});
