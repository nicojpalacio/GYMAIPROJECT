"use client";

import { BsFiletypePdf } from "react-icons/bs";

import { useSession } from "next-auth/react";
import useStore from "@/app/store/selectroutine";

import { useEffect, useState } from "react";
import { obtenerRespuesta } from "@/components/ChatGpt";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner"; // Importa el componente Spinner
// import "bootstrap/dist/css/bootstrap.min.css";
import PdfFile from "@/components/PdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import AnimatedBackground from "@/components/AnimatedBackground";
import "@/app/downloadview/style.css";
// import Header from "@/components/Header";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Downloadview = () => {
  const { selectedValues } = useStore();

  const [respuesta, setRespuesta] = useState("");

  const apiUrl = "api/routine"; // Reemplaza con la URL real de tu API
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga

  const sendResponseToPrisma = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos a Prisma.");
      }

      console.log("Datos enviados correctamente a Prisma.");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (selectedValues?.bodyPart?.label && selectedValues?.objective?.label) {
      obtenerRespuesta(
        selectedValues.bodyPart.label,
        selectedValues.objective.label
      ).then((res) => {
        setRespuesta(res);
        // Enviar la respuesta a la tabla Routine
        sendResponseToPrisma({
          response: res,
          creatorId:
            session?.user
              ?.id /* reemplazar con el ID real */ /* otros campos */,
        });
        setLoading(false);
      });
    }
  }, [selectedValues]);

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div className="container-bg">
      {/* <Header/> */}
      <div className="containerTwo">
        <h1 className="text-center text-zinc-50 text-xl mb-10 font-extrabold flex">
          <p> GYM</p>
          <p className="text-appOrange">AI</p>
        </h1>

        <div className="justify-center text-center">
          <h1 className="font-extrabold text-xl text-zinc-50">
            MAKE THIS PLAN
          </h1>

          <div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="text-zinc-50 text-2xl px-6 py-4 mb-4 mt-3 font-semibold rounded-lg bg-appOrangeButton hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300 w-full"
              type="submit"
            >
              Routine
            </button>

            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                              <ExclamationTriangleIcon
                                className="h-6 w-6 text-red-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-base font-semibold leading-6 text-gray-900"
                              >
                                Creating Routine
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  {loading ? (
                                    <Spinner animation="border" role="status">
                                      <span className="text-black visually-hidden">
                                        Loading...
                                      </span>
                                    </Spinner>
                                  ) : (
                                    <p>Routine: {respuesta}</p>
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => setOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>

          <h1 className="font-extrabold text-xl text-slate-400">FOR YOU</h1>
        </div>

        <div className="flex">
          <PDFDownloadLink
            document={<PdfFile respuesta={respuesta} />}
            filename="FORM"
          >
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button className="text-white">Download</button>
              )
            }
          </PDFDownloadLink>
          <BsFiletypePdf style={{ fontSize: "40px" }} />
        </div>
      </div>

      <div className="bg-animated"></div>
      <div className="bg-animated bg2-animated"></div>
      <div className="bg-animated bg3-animated"></div>
    </div>
  );
};

export default Downloadview;
