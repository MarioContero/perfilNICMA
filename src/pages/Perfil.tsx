import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,IonMenuButton,IonButtons} from "@ionic/react";
const Perfil: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
						<IonMenuButton/>
					</IonButtons>
                        <IonTitle>Perfil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard className="ion-padding">
                    <img alt="Imagen" src="assets/Nicole.jpeg" />
                        <IonHeader>
                            <IonCardTitle>Nicole Gavilanes</IonCardTitle>
                            <IonCardSubtitle>1718311739</IonCardSubtitle>

                        </IonHeader>
                            <IonCardContent><p>Telefono:0998597086</p><p>Experiencia Laboral:Abogada de EMGIRS-EP</p><p>Direccion:Quito</p></IonCardContent>
                    </IonCard>
                    <IonCard className="ion-padding">
                        <img alt="Imagen" src="assets/Carlos.jpeg" />
                        <IonHeader>
                            <IonCardTitle>Carlos Moya</IonCardTitle>
                            <IonCardSubtitle>1722388129</IonCardSubtitle>

                        </IonHeader>
                            <IonCardContent><p>Telefono:0981818863</p><p>Experiencia Laboral:Desarrollador de Aplicaciones ENICMA</p><p>Direccion:Quito</p></IonCardContent>
                    </IonCard>
                    <IonCard className="ion-padding">
                        <img alt="Imagen" src="assets/Mario.jpeg" />
                        <IonHeader>
                            <IonCardTitle>Mario Contero</IonCardTitle>
                            <IonCardSubtitle>1721689295</IonCardSubtitle>

                        </IonHeader>
                            <IonCardContent><p>Telefono:0992651869</p><p>Experiencia Laboral:Ejecutivo Comercial</p><p>Direccion:Quito</p></IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    );
};
export default Perfil;
