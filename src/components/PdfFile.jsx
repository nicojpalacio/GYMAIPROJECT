import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    
  },
});

const PdfFile = ({respuesta}) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Routine:
        </Text>
        <Text style={styles.text}>
          {respuesta}
        </Text>
      </Page>
    </Document>
  );
};

export default PdfFile;
