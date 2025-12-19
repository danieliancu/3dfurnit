
import { GoogleGenAI } from "@google/genai";

export const modifyRoomWithProduct = async (
  roomBase64: string,
  productName: string,
  productDescription: string
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Prompt îmbunătățit pentru a forța AI-ul să trateze obiectul ca pe un element individual (PNG-like)
  const prompt = `
    Ești un expert în randări fotorealiste de design interior. 
    SARCINĂ: 
    1. Analizează camera din imaginea încărcată (iluminare, perspectivă, spațiu disponibil).
    2. Inserează în mod ultra-realist următorul produs: "${productName}".
    3. DETALII PRODUS: ${productDescription}.
    
    REGULI DE INTEGRARE:
    - Obiectul trebuie să aibă exact designul descris.
    - Calculează umbrele de contact pe podea sau perete în funcție de sursele de lumină din poză.
    - Ajustează perspectiva obiectului astfel încât să pară că stă natural în spațiu (pe podea pentru paturi/scaune/dulapuri, pe tavan/perete pentru lămpi).
    - Nu modifica restul camerei, doar adaugă acest obiect.
    - REZULTAT: Generază doar imaginea finală modificată, fără text adițional.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: roomBase64.split(',')[1],
              mimeType: 'image/png',
            },
          },
          {
            text: prompt
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }

    throw new Error("Nu am putut genera vizualizarea. Încercați o altă poză sau alt produs.");
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
