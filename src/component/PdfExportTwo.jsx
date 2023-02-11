import React from 'react'
import { ExportNav } from './StyledComponents';
import { FaDownload } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { ComponentToPrint } from './ComponentToPrint';
import { Container } from './StyledComponents';

export default function PdfExportTwo() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    }); 

    return (
        <Container>
            <ExportNav>
                <h2>Pdf Export Two</h2>
                <button onClick={handlePrint}>
                    <FaDownload />
                </button>
            </ExportNav>
            <hr/>

            <div style={{ overflow: "hidden", height: 0 }}>
                <ComponentToPrint ref={componentRef} />
            </div>   
        </Container>
    )
}