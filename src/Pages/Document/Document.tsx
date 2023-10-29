"use client";
import { useState } from 'react';
import Editor from '@/Shared/Components/Editor/Editor';
import { Box } from '@mantine/core';


// Initial Data
const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "ReadOnly",
            data: {
                "text": "DOCUMENT"
            }
        },
        {
            type: "header",
            data: {
                "text": "Untitled!"
            }
        },
        {
            type: "ReadOnly",
            data: {
                "text": "DATE"
            }
        },
        {
            type: "ReadOnly",
            data: {
                "text": "EDITORS"
            }
        },
    ],
};

type Props = {}

export function Document({ }: Props) {
    const [data, setData] = useState(INITIAL_DATA);

    return (
        <Box className="editor">
            <Editor data={data} onChange={setData} editorblock="editorjs-container" />
        </Box>
    )
}