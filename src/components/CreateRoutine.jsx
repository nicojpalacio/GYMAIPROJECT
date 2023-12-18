'use client'
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useStore from '@/app/store/selectroutine';


const InputView = () => {
  // Extrae las funciones del estado global
  const { setBodyPartsOptions, setObjectivesOptions, setSelectedValues } = useStore();
  
  // Usa el estado local para bodyPartsOptions y objectivesOptions
  const [bodyPartsOptions, setLocalBodyPartsOptions] = useState([]);
  const [objectivesOptions, setLocalObjectivesOptions] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [selectedObjective, setSelectedObjective] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Llamada a la API para obtener las opciones de bodyParts
        const bodyPartsResponse = await axios.get('/api/body-parts'); 
        const bodyPartsMappedOptions = bodyPartsResponse.data.map(item => ({
          value: item.name,
          label: item.name,
        }));
        // console.log('Mapped Body Parts Options:', bodyPartsMappedOptions);

        // Actualizar el estado local con setLocalBodyPartsOptions
        setLocalBodyPartsOptions(bodyPartsMappedOptions);
        
        // Actualizar el estado global con setBodyPartsOptions
        setBodyPartsOptions(bodyPartsMappedOptions);

        // Llamada a la API para obtener las opciones de objectives
        const objectivesResponse = await axios.get('/api/objetives'); 
        const objectivesMappedOptions = objectivesResponse.data.map(item => ({
          value: item.description,
          label: item.description,
        }));
        // console.log('Mapped Objectives Options:', objectivesMappedOptions);

        // Actualizar el estado local con setLocalObjectivesOptions
        setLocalObjectivesOptions(objectivesMappedOptions);

        // Actualizar el estado global con setObjectivesOptions
        setObjectivesOptions(objectivesMappedOptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setBodyPartsOptions, setObjectivesOptions]); // Agrega las dependencias

  const handleBodyPartChange = (selectedOption) => {
    setSelectedBodyPart(selectedOption);
  };

  const handleObjectiveChange = (selectedOption) => {
    setSelectedObjective(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedValues = {
      bodyPart: selectedBodyPart,
      objective: selectedObjective,
    };

    console.log('Selected Values:', selectedValues);

    if (selectedValues){
      router.push("/downloadview");
      router.refresh();
      
      // Actualizar el estado global con setSelectedValues
      setSelectedValues(selectedValues);
    }
  };


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center mb-6">
        <h1 className="text-zinc-50 text-xl font-extrabold">CREATE YOUR PLAN</h1>
        <div className="bg-appOrange px-4 py-2 rounded-full">Select your options</div>
      </div>
      <form className="w-4/5 max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">Body parts</label>
          <Select
            options={bodyPartsOptions}
            className=" text-black"
            placeholder="Select Body Part"
            onChange={handleBodyPartChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white font-bold mb-2">Objective</label>
          <Select
            options={objectivesOptions}
            className=" text-black"
            placeholder="Select Objective"
            onChange={handleObjectiveChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="rounded-full bg-appOrange text-gray-50 text-3xl font-semibold px-6 py-2" type="submit">
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default InputView;

