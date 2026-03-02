sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {

     onInit() {
         // 1️⃣ Modelo de datos JSON
         const oData = {
            recipient : { name : "World" }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);

         // 2️⃣ Modelo de recursos (i18n)
         const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello() {
         // 1️⃣ Acceder al ResourceBundle
         const oBundle = this.getView().getModel("i18n").getResourceBundle();

         // 2️⃣ Leer valor del modelo JSON
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");

         // 3️⃣ Reemplazar placeholder {0} en helloMsg
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // 4️⃣ Mostrar mensaje
         MessageToast.show(sMsg);
      }

   });
});