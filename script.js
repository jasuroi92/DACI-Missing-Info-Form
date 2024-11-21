// FUNCIONES PARA LA OPCIÓN DE ELECTRIC HV Y LV

// Función desplegable para opción Electric Poc
function toggleSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para opción Substation

function substationSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para opción Substation Enclosure
function subEnclosureSubOptions() {
    const checkbox = document.getElementById('subCheckbox_Substation_Enclosure');
    const subOptions = document.getElementById('subEnclosureSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// Función desplegable para opción MSDB
function MSDBSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para opción Meter location dentro de MSDB
function MSDBMeterSubOptions() {
    const checkbox = document.getElementById('MSDBCheckbox_Meter_location');
    const subOptions = document.getElementById('MSDBMeterSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// Función desplegable para opción PV Panels
function PVSubOptions() {
    const checkbox = document.getElementById('PVCheckbox');
    const subOptions = document.getElementById('PVSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// Función desplegable para opcion PV Panels con Export

function PVExportLoadSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para opción Street Lights
function SLSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para opción Additional loads
function addSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para subopción Additional loads > Pumping Station
function pumpSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para subopción Additional loads > TBS
function TBSSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para subopción Additional loads > FP
function FPSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para subopción Additional loads > HO
function HOSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para subopción Additional loads > EVC
function EVCSubOptions() {
    const checkbox = document.getElementById('addCheckbox_EVC_(Electric_Vehicle_Charger)');
    const subOptions = document.getElementById('EVCSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// Función desplegable para subopción Additional loads > Commercial
function comSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// FUNCIONES PARA LA OPCIÓN DE GAS MP Y LP

// Función desplegable para opción gas CSEP
function CSEPSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para opción gas Gas Supplier
function gasSupSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para para opción gas Gas Metering Type
function gasMeteringTypeSubOptions() {
    const checkbox = document.getElementById('meteringTypeCheckbox');
    const subOptions = document.getElementById('gasMeteringTypeSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// Función desplegable para opción gas Commercial Plots
function commercialSubOptions(checkboxId, subOptionsContainerId) {
    const checkbox = document.getElementById(checkboxId);
    const subOptionsContainer = document.getElementById(subOptionsContainerId);

    if (!checkbox || !subOptionsContainer) {
        console.warn('No se encontró el checkbox o el contenedor de subopciones');
        return;
    }

    // Mostrar u ocultar las subopciones
    if (checkbox.checked) {
        subOptionsContainer.style.display = 'block';
    } else {
        subOptionsContainer.style.display = 'none';

        // Si se desactiva el checkbox principal, también desactiva todas las subopciones
        const inputs = subOptionsContainer.querySelectorAll('input');
        inputs.forEach(input => {
            input.checked = false;
        });

        // Esconde subopciones anidadas
        const nestedSubOptions = subOptionsContainer.querySelectorAll('div');
        nestedSubOptions.forEach(div => {
            div.style.display = 'none';
        });
    }
}

// Función desplegable para para opción gas Gas Metering Type
function gasMeterTypeSubOptions() {
    const checkbox = document.getElementById('meterTypeCheckbox');
    const subOptions = document.getElementById('gasMeterTypeSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// Función desplegable para para opción gas PRI needed
function PRISubOptions() {
    const checkbox = document.getElementById('PRICheckbox');
    const subOptions = document.getElementById('PRISubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// FUNCIONES PARA LA OPCIÓN DE WATER NAV Y SLA

// Función desplegable para opción Water POC Plan
function WPOCSubOptions(checkboxId, subOptionsId) {
    var checkbox = document.getElementById(checkboxId);
    var subOptions = document.getElementById(subOptionsId);
    subOptions.style.display = checkbox.checked ? 'block' : 'none';
}

function materialSubOptions() {
    const checkbox = document.getElementById('materialCheckbox');
    const subOptions = document.getElementById('materialSubOptions');

    if (checkbox.checked) {
        subOptions.style.display = 'block';
    } else {
        subOptions.style.display = 'none';

        // Desmarcar las subopciones cuando se desmarca el checkbox principal
        const radios = subOptions.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    }
}

// FUNCIÓN PARA COPIAR INFO DE LEGAL DETAILS EN CASO DE SER MISMO DEVELOPER Y LANDOWNER

function copyDeveloperDetails() {
    console.log(document.getElementById('devCompanyName').value); // Para depurar
    document.getElementById('landCompanyName').value = document.getElementById('devCompanyName').value;

    console.log(document.getElementById('devAddress').value); // Para depurar
    document.getElementById('landAddress').value = document.getElementById('devAddress').value;

    console.log(document.getElementById('devContactName').value); // Para depurar
    document.getElementById('landContactName').value = document.getElementById('devContactName').value;

    console.log(document.getElementById('devPhone').value); // Para depurar
    document.getElementById('landPhone').value = document.getElementById('devPhone').value;

    console.log(document.getElementById('devEmail').value); // Para depurar
    document.getElementById('landEmail').value = document.getElementById('devEmail').value;
}

// FUNCIÓN PARA LA VALIDACIÓN DE LOS FORMS DE ELECTRIC, GAS Y WATER

/*function finishButton() {
    console.log('El botón de prueba funciona');
    const finishDiv = document.getElementById('missingUtilitiesInfo');
    finishDiv.innerHTML = ''; // Borra el contenido del div

    // Campos principales y su jerarquía
    const utilitiesFields = [

        // ELECTRIC FORM ITEMS

        { id: 'electricCheckbox', label: 'Electric POC', formId: 'HVForm', subOptions: {
            'Design Document': [],
            'Quote Letter': [],
            'POC Load': [],
            'Diversion or Reinforcement Works': []
        }},
        { id: 'subCheckbox', label: 'Substation', formId: 'HVForm', subOptions: {
            'Substation Location': [],
            'Substation Enclosure': ['GRP', 'Brick Built']
        }},
        { id: 'MSDBCheckbox', label: 'MSDB', formId: 'HVForm', subOptions: {
            'Floor plans in DWG': [],
            'MSDB location': [],
            'Landlord Supplies loads & phases': [],
            'Meter location': ['Communaly in MSDB room at ground floor', 'Communaly in riser rooms at each floor', 'On each flat']
        }},
        { id: 'PVCheckbox', label: 'PV Panels', formId: 'HVForm', subOptions: {
            'With Export load': [],
            'Not Export': []
        }},
        { id: 'SLCheckbox', label: 'Street Lights', formId: 'HVForm', subOptions: {
            'Street lights plan in DWG': [],
            'Street lights type (public & private)': []
        }},
        { id: 'addCheckbox', label: 'Additional Loads', formId: 'HVForm', subOptions: {
            'TBS (Temporary Building Supply)': ['Location of TBS','TBS Load','Phases of supply for TBS'],
            'FP (Feeder Pilar)': ['Location of FP','FP Load','Phases of supply for FP'],
            'HO (Hyper Optic)': ['Location of HO','HO Load','Phases of supply for HO'],
            'EVC (Electric Vehicle Charger)': ['Fast Type', 'Slow Type'],
            'Pumping Station': ['Motor details','Exact location of Pumping Station','Phases of supply for Pump'],
            'Commercial Unit': ['Location of Commercial','Load for Commercial','Phases of supply for commercial','Building Construction Type']
        }},

        // GAS FORM ITEMS

        { id: 'gasCompanyCheckbox', label: 'Gas company Reference', formId: 'MPForm'},
        { id: 'CSEPCheckbox', label: 'CSEP Information', formId: 'MPForm', subOptions: {
            'Coordinates': [],
            'Type of connection': [],
            'CSEP Pressure': [],
            'Minimum pressure': []  
        }},
        { id: 'gasSupCheckbox', label: 'Gas Supplier', formId: 'MPForm'},
        { id: 'meteringTypeCheckbox', label: 'Metering Type', formId: 'MPForm', subOptions: {
            'Smart': [],
            'Dumb': []
        }},
        { id: 'commercialCheckbox', label: 'Commercial Plots', formId: 'MPForm', subOptions: {
            'Load for the commercial is missing': []
        }},
        { id: 'meterTypeCheckbox', label: 'Meter Type', formId: 'MPForm', subOptions: {
            'Meter Box': [],
            'Built In': []
        }},
        { id: 'PRICheckbox', label: 'PRI', formId: 'MPForm', subOptions: {
            'Above Ground': [],
            'Below Ground': []
        }},
        { id: 'waterCompanyCheckbox', label: 'Water company Reference', formId: 'NAVForm'},
        { id: 'riskCheckbox', label: 'Risk Assessment', formId: 'NAVForm'},
        { id: 'floodCheckbox', label: 'Flood Risk', formId: 'NAVForm'},
        { id: 'f10Checkbox', label: 'F10 Notification', formId: 'NAVForm'},
        { id: 'EnvCheckbox', label: 'Environmental Report', formId: 'NAVForm'},
        { id: 'materialCheckbox', label: 'Pipe Material is not confirmed', formId: 'NAVForm', subOptions: {
            'PE/HPPE': [],
            'Barrier Pipe (PEB)': []
        }},
        { id: 'WPOCCheckbox', label: 'Water POC Plan', formId: 'NAVForm', subOptions: {
            'Design Document': [],
            'POC Letter': []
        }},
        { id: 'NAVCheckbox', label: 'NAV Adoption', formId: 'NAVForm'}
    ];

    let missingUtilitiesFields = [];


function checkSubOptions(subOptions, parentId) {
    let missingSubOptions = [];

    // Verificar si subOptions es válido
    if (!subOptions || typeof subOptions !== 'object') {
        return missingSubOptions; // Si no hay subopciones, detener la recursión
    }

    Object.keys(subOptions).forEach(optionLabel => {
        const subOptionId = `${parentId}_${optionLabel.replace(/\s+/g, '_')}`; // Generar ID único
        const checkbox = document.getElementById(subOptionId);

        // Si la subopción es un checkbox
        if (checkbox && checkbox.type === 'checkbox') {
            // Si el checkbox padre no está marcado, ignorar subopciones anidadas
            if (!checkbox.checked) {
                missingSubOptions.push(optionLabel); // Agregar subopción no marcada
                return; // Salir de esta iteración, no procesar subniveles
            }
        }

        // Si la subopción es un radio y no está marcado
        else if (checkbox && checkbox.type === "radio") {
            const radios = document.querySelectorAll(`input[type="radio"][name="${checkbox.name}"]`);
            const isAnyRadioSelected = Array.from(radios).some(radio => radio.checked);

            if (!isAnyRadioSelected) {
                missingSubOptions.push(optionLabel);
            }
        }

        // Si hay subniveles (arrays con subopciones), procesarlos recursivamente
        const nestedOptions = subOptions[optionLabel];
        if (Array.isArray(nestedOptions) && nestedOptions.length > 0 && checkbox && checkbox.checked) {
            const nestedMissing = checkSubOptions(
                nestedOptions.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
                subOptionId
            );
            missingSubOptions = missingSubOptions.concat(nestedMissing);
        }
    });

    return missingSubOptions;
}



    // Verificar campos principales y subopciones
utilitiesFields.forEach(field => {
    const form = document.getElementById(field.formId); // Formulario asociado

    // Asegúrate de que el formulario esté activo antes de procesar
    if (form && window.getComputedStyle(form).display !== 'none') {
        const checkbox = document.getElementById(field.id);

        // Si el checkbox principal está marcado, verificar subopciones
        if (checkbox && checkbox.checked) {
            const missingSubOptions = checkSubOptions(field.subOptions, field.id);
            if (missingSubOptions.length > 0) {
                missingUtilitiesFields.push(`${field.label}: ${missingSubOptions.join(', ')}`);
            }
        } 
        // Si el checkbox principal no está marcado
        else if (!checkbox || !checkbox.checked) {
            missingUtilitiesFields.push(field.label);
        }
    } else {
        // Omitir este campo ya que el formulario no está activo
        console.log(`Formulario ${field.formId} no está activo, omitiendo campo ${field.label}`);
    }
});


    // Mostrar los resultados
    const missingUtilitiesFieldset = document.querySelector('.missingUtilities-fieldset');
    if (missingUtilitiesFields.length > 0) {
        missingUtilitiesFieldset.style.display = 'block';
        const listUtilitiesItems = missingUtilitiesFields.map(field => `<li>- ${field}</li>`).join('');
        finishDiv.innerHTML = `<strong><h3>The following elements are missing, please, ask the client for them:</h3></strong><ul>${listUtilitiesItems}</ul>`;
        finishDiv.style.color = 'red';
    } else {
        missingUtilitiesFieldset.style.display = 'block';
        finishDiv.innerHTML = 'All information needed is complete.';
        finishDiv.style.color = 'black';
    }
}*/

function finishButton() {
    console.log('El botón de prueba funciona');
    const finishDiv = document.getElementById('missingUtilitiesInfo');
    finishDiv.innerHTML = ''; // Borra el contenido del div

    // Campos principales y su jerarquía con categorías
    const utilitiesFields = [
        // ELECTRIC FORM ITEMS
        { id: 'electricCheckbox', label: 'Electric POC', formId: 'HVForm', category: 'Electric', subOptions: {
            'Design Document': [],
            'Quote Letter': [],
            'POC Load': [],
            'Diversion or Reinforcement Works': []
        }},
        { id: 'subCheckbox', label: 'Substation', formId: 'HVForm', category: 'Electric', subOptions: {
            'Substation Location': [],
            'Substation Enclosure': ['GRP', 'Brick Built']
        }},
        { id: 'MSDBCheckbox', label: 'MSDB', formId: 'HVForm', category: 'Electric', subOptions: {
            'Floor plans in DWG': [],
            'MSDB location': [],
            'Landlord Supplies loads & phases': [],
            'Meter location': ['Communaly in MSDB room at ground floor', 'Communaly in riser rooms at each floor', 'On each flat']
        }},
        { id: 'PVCheckbox', label: 'PV Panels', formId: 'HVForm', category: 'Electric', subOptions: {
            'With Export load': [],
            'Not Export': []
        }},
        { id: 'SLCheckbox', label: 'Street Lights', formId: 'HVForm', category: 'Electric', subOptions: {
            'Street lights plan in DWG': [],
            'Street lights type (public & private)': []
        }},
        { id: 'addCheckbox', label: 'Additional Loads', formId: 'HVForm', category: 'Electric', subOptions: {
            'TBS (Temporary Building Supply)': ['Location of TBS','TBS Load','Phases of supply for TBS'],
            'FP (Feeder Pilar)': ['Location of FP','FP Load','Phases of supply for FP'],
            'HO (Hyper Optic)': ['Location of HO','HO Load','Phases of supply for HO'],
            'EVC (Electric Vehicle Charger)': ['Fast Type', 'Slow Type'],
            'Pumping Station': ['Motor details','Exact location of Pumping Station','Phases of supply for Pump'],
            'Commercial Unit': ['Location of Commercial','Load for Commercial','Phases of supply for commercial','Building Construction Type']
        }},

        // GAS FORM ITEMS
        { id: 'gasCompanyCheckbox', label: 'Gas company Reference', formId: 'MPForm', category: 'Gas'},
        { id: 'CSEPCheckbox', label: 'CSEP Information', formId: 'MPForm', category: 'Gas', subOptions: {
            'Coordinates': [],
            'Type of connection': [],
            'CSEP Pressure': [],
            'Minimum pressure': []  
        }},
        { id: 'gasSupCheckbox', label: 'Gas Supplier', formId: 'MPForm', category: 'Gas'},
        { id: 'meteringTypeCheckbox', label: 'Metering Type', formId: 'MPForm', category: 'Gas', subOptions: {
            'Smart': [],
            'Dumb': []
        }},
        { id: 'commercialCheckbox', label: 'Commercial Plots', formId: 'MPForm', category: 'Gas', subOptions: {
            'Load for the commercial is missing': []
        }},
        { id: 'meterTypeCheckbox', label: 'Meter Type', formId: 'MPForm', category: 'Gas', subOptions: {
            'Meter Box': [],
            'Built In': []
        }},
        { id: 'PRICheckbox', label: 'PRI', formId: 'MPForm', category: 'Gas', subOptions: {
            'Above Ground': [],
            'Below Ground': []
        }},

        // WATER FORM ITEMS
        { id: 'waterCompanyCheckbox', label: 'Water company Reference', formId: 'NAVForm', category: 'Water'},
        { id: 'riskCheckbox', label: 'Risk Assessment', formId: 'NAVForm', category: 'Water'},
        { id: 'floodCheckbox', label: 'Flood Risk', formId: 'NAVForm', category: 'Water'},
        { id: 'f10Checkbox', label: 'F10 Notification', formId: 'NAVForm', category: 'Water'},
        { id: 'EnvCheckbox', label: 'Environmental Report', formId: 'NAVForm', category: 'Water'},
        { id: 'materialCheckbox', label: 'Pipe Material is not confirmed', formId: 'NAVForm', category: 'Water', subOptions: {
            'PE/HPPE': [],
            'Barrier Pipe (PEB)': []
        }},
        { id: 'WPOCCheckbox', label: 'Water POC Plan', formId: 'NAVForm', category: 'Water', subOptions: {
            'Design Document': [],
            'POC Letter': []
        }},
        { id: 'NAVCheckbox', label: 'NAV Adoption', formId: 'NAVForm', category: 'Water'}
    ];

    let missingUtilitiesFields = {
        Electric: [],
        Gas: [],
        Water: []
    };

    function checkSubOptions(subOptions, parentId) {
        let missingSubOptions = [];

        // Verificar si subOptions es válido
        if (!subOptions || typeof subOptions !== 'object') {
            return missingSubOptions; // Si no hay subopciones, detener la recursión
        }

        Object.keys(subOptions).forEach(optionLabel => {
            const subOptionId = `${parentId}_${optionLabel.replace(/\s+/g, '_')}`; // Generar ID único
            const checkbox = document.getElementById(subOptionId);

            // Si la subopción es un checkbox
            if (checkbox && checkbox.type === 'checkbox') {
                // Si el checkbox padre no está marcado, ignorar subopciones anidadas
                if (!checkbox.checked) {
                    missingSubOptions.push(optionLabel); // Agregar subopción no marcada
                    return; // Salir de esta iteración, no procesar subniveles
                }
            }

            // Si la subopción es un radio y no está marcado
            else if (checkbox && checkbox.type === "radio") {
                const radios = document.querySelectorAll(`input[type="radio"][name="${checkbox.name}"]`);
                const isAnyRadioSelected = Array.from(radios).some(radio => radio.checked);

                if (!isAnyRadioSelected) {
                    missingSubOptions.push(optionLabel);
                }
            }

            // Si hay subniveles (arrays con subopciones), procesarlos recursivamente
            const nestedOptions = subOptions[optionLabel];
            if (Array.isArray(nestedOptions) && nestedOptions.length > 0 && checkbox && checkbox.checked) {
                const nestedMissing = checkSubOptions(
                    nestedOptions.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
                    subOptionId
                );
                missingSubOptions = missingSubOptions.concat(nestedMissing);
            }
        });

        return missingSubOptions;
    }

    // Verificar campos principales y subopciones
    utilitiesFields.forEach(field => {
        const form = document.getElementById(field.formId); // Formulario asociado

        // Asegúrate de que el formulario esté activo antes de procesar
        if (form && window.getComputedStyle(form).display !== 'none') {
            const checkbox = document.getElementById(field.id);

            // Si el checkbox principal está marcado, verificar subopciones
            if (checkbox && checkbox.checked) {
                const missingSubOptions = checkSubOptions(field.subOptions, field.id);
                if (missingSubOptions.length > 0) {
                    missingUtilitiesFields[field.category].push(`${field.label}: ${missingSubOptions.join(', ')}`);
                }
            } 
            // Si el checkbox principal no está marcado
            else if (!checkbox || !checkbox.checked) {
                missingUtilitiesFields[field.category].push(field.label);
            }
        }
    });

    // Mostrar los resultados clasificados por categoría
    const missingUtilitiesFieldset = document.querySelector('.missingUtilities-fieldset');
    if (Object.values(missingUtilitiesFields).some(fields => fields.length > 0)) {
        missingUtilitiesFieldset.style.display = 'block';

        let resultHTML = '';
        
        // Agregar Electric
        if (missingUtilitiesFields.Electric.length > 0) {
            resultHTML += `<strong><h3>Electric:</h3></strong><ul>${missingUtilitiesFields.Electric.map(field => `<li>- ${field}</li>`).join('')}</ul>`;
        }

        // Agregar Gas
        if (missingUtilitiesFields.Gas.length > 0) {
            resultHTML += `<strong><h3>Gas:</h3></strong><ul>${missingUtilitiesFields.Gas.map(field => `<li>- ${field}</li>`).join('')}</ul>`;
        }

        // Agregar Water
        if (missingUtilitiesFields.Water.length > 0) {
            resultHTML += `<strong><h3>Water:</h3></strong><ul>${missingUtilitiesFields.Water.map(field => `<li>- ${field}</li>`).join('')}</ul>`;
        }

        finishDiv.innerHTML = resultHTML;
        finishDiv.style.color = 'red';
    } else {
        missingUtilitiesFieldset.style.display = 'block';
        finishDiv.innerHTML = 'All information needed is complete.';
        finishDiv.style.color = 'black';
    }
}

// Función para validar el formulario y mostrar los botones de sección si la validación es correcta

function validateForm() {
    // Limpiar el contenido del div al inicio de la función
    const messageDiv = document.getElementById('missingMandatoryInfo');
    messageDiv.innerHTML = ''; // Borra el contenido del div
    const sectionButtons = document.querySelectorAll('.sec-btn-align');
    
    // Div que contiene el botón de utilidades
    const utilitiesBtnDiv = document.querySelector('.utilities-btn');

    // Campos obligatorios principales
    const mandatoryFields = [
        { id: 'loaCheckbox', label: 'Letter of Authority' },
        { id: 'siteLayout', label: 'Site Layout in DWG' },
        { id: 'drainage', label: 'Drainage' },
        { id: 'meterPos', label: 'Meter Position' },
        { id: 'permPavement', label: 'Permeable Pavement' },
        { id: 'culverts', label: 'Culverts' },
        { id: 'attTank', label: 'Attenuation Tank' },
        { id: 'assValue', label: 'Asset Value in PDF' },
        { id: 'conPlan', label: 'Conveyancing Plan' },
        { id: 'accSchedule', label: 'Accommodation Schedule' },
        { id: 's38', label: 'S38 Plan' },
        { id: 's278', label: 'S278 Plan' },
        { id: 'siteExPlan', label: 'Site Execution Plan' }
    ];

    // Subopciones por cada campo
    const subOptions = {
        drainage: ['Drainage DWG file', 'Drainage PDF file'],
        meterPos: ['Meter position DWG file', 'Meter position PDF file'],
        permPavement: ['Permeable pavement section details'],
        culverts: ['Culvert section details'],
        attTank: ['Attenuation Tank depth of cover']
    };

    let missingFields = [];

    // Verificar los campos principales
    mandatoryFields.forEach(field => {
        const checkbox = document.getElementById(field.id);
        if (checkbox && !checkbox.checked) {
            missingFields.push(field.label);
        }
    });

    // Verificar las subopciones
    Object.keys(subOptions).forEach(option => {
        const checkbox = document.getElementById(option);
        if (checkbox && checkbox.checked) {
            console.log(`Checking suboptions for: ${option}`);
            const subCheckboxes = document.querySelectorAll(`input[name="${option}Options"]`);

            console.log(`Found ${subCheckboxes.length} subCheckboxes for ${option}`);
            subOptions[option].forEach(subOptionLabel => {
                console.log(`Checking subOption: ${subOptionLabel}`);
                let subOptionChecked = false;

                subCheckboxes.forEach(subCheckbox => {
                    console.log(`SubCheckbox value: ${subCheckbox.value}, checked: ${subCheckbox.checked}`);
                    
                    // Normalizamos las comparaciones con toLowerCase() para evitar problemas de mayúsculas/minúsculas
                    if ((subCheckbox.value.toLowerCase() === subOptionLabel.toLowerCase() && subCheckbox.checked) ||
                        (subCheckbox.type === 'text' && subCheckbox.value.trim() !== '')) {
                        subOptionChecked = true;
                    }
                });

                console.log(`SubOptionChecked status for ${subOptionLabel}: ${subOptionChecked}`);
                
                // Si la subopción no está marcada, agregarla a la lista de campos faltantes
                if (!subOptionChecked) {
                    console.log(`Missing subOption added: ${subOptionLabel}`);
                    missingFields.push(subOptionLabel);
                } else {
                    // Si la subopción está marcada, eliminarla de la lista de campos faltantes
                    const index = missingFields.indexOf(subOptionLabel);
                    if (index !== -1) {
                        console.log(`SubOption found and removed from missingFields: ${subOptionLabel}`);
                        missingFields.splice(index, 1);
                    }
                }
            });
        }
    });

    console.log("Campos faltantes antes de imprimir:", missingFields);

    // Mostrar los mensajes en el div con ID 'missingMandatoryInfo'
const missingInfoFieldset = document.querySelector('.missingInfo-fieldset');
if (missingFields.length > 0) {
    missingInfoFieldset.style.display = 'block'; // Cambiar 'none' a 'block' o 'flex'

    // Crear una lista no ordenada con guiones
    const listItems = missingFields.map(field => `<li>- ${field}</li>`).join('');
    messageDiv.innerHTML = `<strong><h3>The following mandatory elements are missing:</h3></strong><ul>${listItems}</ul>`;
    messageDiv.style.color = 'red';
    utilitiesBtnDiv.style.display = 'block';
} else {
    missingInfoFieldset.style.display = 'block';
    messageDiv.innerHTML = 'All mandatory information needed is complete.';
    messageDiv.style.color = 'black'; // Cambio de color a negro si todo está completo
    utilitiesBtnDiv.style.display = 'block';
}

    // Mostrar los botones de sección
    sectionButtons.forEach(button => {
        button.style.display = 'block';
    });
}

// Función para mostrar/ocultar subbotones de sección Electric
function toggleSubButtonsElec(subButtonsId) {
    const subButtons = document.getElementById(subButtonsId);
    const form = document.getElementById('HVForm'); // Seleccionamos el formulario por su ID

    // Alternar visibilidad de los sub-botones
    if (subButtons.style.display === 'block') {
        subButtons.style.display = 'none';
    } else {
        subButtons.style.display = 'block';
    }

    // Alternar visibilidad del formulario
    if (form) { // Asegurarnos de que el formulario exista
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    }
}

// Función para mostrar/ocultar subbotones de sección Gas
function toggleSubButtonsGas(subButtonsId) {
    const subButtons = document.getElementById(subButtonsId);
    const form = document.getElementById('MPForm'); // Seleccionamos el formulario por su ID

    // Alternar visibilidad de los sub-botones
    if (subButtons.style.display === 'block') {
        subButtons.style.display = 'none';
    } else {
        subButtons.style.display = 'block';
    }

    // Alternar visibilidad del formulario
    if (form) { // Asegurarnos de que el formulario exista
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    }
}

// Función para mostrar/ocultar subbotones de sección Water
function toggleSubButtonsWater(subButtonsId) {
    const subButtons = document.getElementById(subButtonsId);
    const form = document.getElementById('NAVForm'); // Seleccionamos el formulario por su ID

    // Alternar visibilidad de los sub-botones
    if (subButtons.style.display === 'block') {
        subButtons.style.display = 'none';
    } else {
        subButtons.style.display = 'block';
    }

    // Alternar visibilidad del formulario
    if (form) { // Asegurarnos de que el formulario exista
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    }
}

// FUNCIÓN PARA MOSTRAR FORMULARIO DE HV O DE LV
/*function toggleElecForm(formType) {
    // Asegúrate de que el formulario general esté visible
    document.getElementById('HVForm').style.display = 'block';

    // Muestra u oculta la sección de subestación
    if (formType === 'elecHV') {
        document.getElementById('substationEnclosureSection').style.display = 'block';
        document.querySelector('#HVForm fieldset legend').textContent = 'Electric HV Form';
    } else if (formType === 'elecLV') {
        document.getElementById('substationEnclosureSection').style.display = 'none';
        document.querySelector('#HVForm fieldset legend').textContent = 'Electric LV Form';
    }
}*/

function toggleElecForm(formType) {
    // Asegúrate de que el formulario general esté visible
    document.getElementById('HVForm').style.display = 'block';

    // Obtén todos los checkboxes y radio buttons dentro de 'substationEnclosureSection'
    const inputsElec = document.querySelectorAll('#substationEnclosureSection input[type="checkbox"], #substationEnclosureSection input[type="radio"]');

    if (formType === 'elecHV') {
        document.getElementById('substationEnclosureSection').style.display = 'block';
        document.querySelector('#HVForm fieldset legend').textContent = 'Electric HV Form';

        // Asegúrate de mostrar todos los inputs
        inputsElec.forEach(input => {
            input.style.display = 'inline-block'; // Muestra como inline-block o inline según sea necesario
        });

    } else if (formType === 'elecLV') {
        document.getElementById('substationEnclosureSection').style.display = 'none';
        document.querySelector('#HVForm fieldset legend').textContent = 'Electric LV Form';

        // Marca y oculta todos los checkboxes y radio buttons
        inputsElec.forEach(input => {
            if (input.type === 'checkbox') {
                input.checked = true; // Marca los checkboxes
            } else if (input.type === 'radio') {
                // Si es un radio button, selecciona el primero de su grupo (por `name`)
                const groupElec = document.querySelectorAll(`input[type="radio"][name="${input.name}"]`);
                if (groupElec[0] === input) {
                    input.checked = true; // Selecciona el primer radio de su grupo
                }
            }
            input.style.display = 'none'; // Oculta visualmente
        });
    }
}

// FUNCIÓN PARA MOSTRAR FORMULARIO DE MP O DE LP
/*function toggleGasForm(formType) {
    // Asegúrate de que el formulario general esté visible
    document.getElementById('MPForm').style.display = 'block';

    // Muestra u oculta la sección de subestación
    if (formType === 'gasMP') {
        document.getElementById('PRISection').style.display = 'block';
        document.querySelector('#MPForm fieldset legend').textContent = 'MP Gas Form';
    } else if (formType === 'gasLP') {
        document.getElementById('PRISection').style.display = 'none';
        document.querySelector('#MPForm fieldset legend').textContent = 'LP Gas Form';
    }
}*/

function toggleGasForm(formType) {
    // Asegúrate de que el formulario general esté visible
    document.getElementById('MPForm').style.display = 'block';

    // Obtén todos los checkboxes y radio buttons dentro de 'substationEnclosureSection'
    const inputsGas = document.querySelectorAll('#PRISection input[type="checkbox"], #PRISection input[type="radio"]');

    if (formType === 'gasMP') {
        document.getElementById('PRISection').style.display = 'block';
        document.querySelector('#MPForm fieldset legend').textContent = 'MP Gas Form';

        // Asegúrate de mostrar todos los inputs
        inputsGas.forEach(input => {
            input.style.display = 'inline-block'; // Muestra como inline-block o inline según sea necesario
        });

    } else if (formType === 'gasLP') {
        document.getElementById('PRISection').style.display = 'none';
        document.querySelector('#MPForm fieldset legend').textContent = 'LP Gas Form';

        // Marca y oculta todos los checkboxes y radio buttons
        inputsGas.forEach(input => {
            if (input.type === 'checkbox') {
                input.checked = true; // Marca los checkboxes
            } else if (input.type === 'radio') {
                // Si es un radio button, selecciona el primero de su grupo (por `name`)
                const groupGas = document.querySelectorAll(`input[type="radio"][name="${input.name}"]`);
                if (groupGas[0] === input) {
                    input.checked = true; // Selecciona el primer radio de su grupo
                }
            }
            input.style.display = 'none'; // Oculta visualmente
        });
    }
}

// FUNCIÓN PARA MOSTRAR FORMULARIO DE SLA O NAV
/*function toggleWaterForm(formType) {
    // Asegúrate de que el formulario general esté visible
    document.getElementById('NAVForm').style.display = 'block';

    // Muestra u oculta la sección de subestación
    if (formType === 'waterNAV') {
        document.getElementById('POCPlanSection').style.display = 'block';
        document.querySelector('#NAVForm fieldset legend').textContent = 'NAV Water Form';
    } else if (formType === 'waterSLA') {
        document.getElementById('POCPlanSection').style.display = 'none';
        document.querySelector('#NAVForm fieldset legend').textContent = 'SLA Water Form';
    }
}*/

function toggleWaterForm(formType) {
    // Asegúrate de que el formulario general esté visible
    document.getElementById('NAVForm').style.display = 'block';

    // Obtén todos los checkboxes dentro de 'substationEnclosureSection'
    const checkboxes = document.querySelectorAll('#POCPlanSection input[type="checkbox"]');

    if (formType === 'waterNAV') {
        document.getElementById('POCPlanSection').style.display = 'block';
        document.querySelector('#NAVForm fieldset legend').textContent = 'NAV Water Form';

        // Asegúrate de mostrar los checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'inline-block'; // O muestra como inline-flex o inline según sea necesario
        });

    } else if (formType === 'waterSLA') {
        document.getElementById('POCPlanSection').style.display = 'none';
        document.querySelector('#NAVForm fieldset legend').textContent = 'SLA Water Form';

        // Mantén los checkboxes y sus subopciones marcados pero invisibles
        checkboxes.forEach(checkbox => {
            checkbox.checked = true; // Marca todos los checkboxes (directos e hijos)
            checkbox.style.display = 'none'; // Oculta visualmente todos los checkboxes
        });
    }
}

// FUNCIONES PARA FIELSET MANDATORY INFORMATION

// Función desplegable para opción Drainage
function toggleDrainageSubOptions(checkboxId, subOptionsId) {
    var checkbox = document.getElementById(checkboxId);
    var subOptions = document.getElementById(subOptionsId);
    subOptions.style.display = checkbox.checked ? 'block' : 'none';
}

// Función desplegable para opción Meter Position
function toggleMeterSubOptions(checkboxId, subOptionsId) {
    var checkbox = document.getElementById(checkboxId);
    var subOptions = document.getElementById(subOptionsId);
    subOptions.style.display = checkbox.checked ? 'block' : 'none';
}

// Función desplegable para opción Permeable Pavement
function togglePavementSubOptions(checkboxId, subOptionsId) {
    var checkbox = document.getElementById(checkboxId);
    var subOptions = document.getElementById(subOptionsId);
    subOptions.style.display = checkbox.checked ? 'block' : 'none';
}

// Función desplegable para opción Culverts
function toggleCulvertSubOptions(checkboxId, subOptionsId) {
    var checkbox = document.getElementById(checkboxId);
    var subOptions = document.getElementById(subOptionsId);
    subOptions.style.display = checkbox.checked ? 'block' : 'none';
}

// Función desplegable para opción Attenuation Tanks
function toggleTankSubOptions(checkboxId, subOptionsId) {
    var checkbox = document.getElementById(checkboxId);
    var subOptions = document.getElementById(subOptionsId);
    subOptions.style.display = checkbox.checked ? 'block' : 'none';
}

// FUNCION PARA GUARDAR INFORMACIÓN EN FIREBASE

function saveData() {
    const projectInfoFormData = {
        
    }
}