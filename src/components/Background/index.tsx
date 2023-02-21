import {
    Background as BgReactFlow,
    BackgroundProps,
    BackgroundVariant,
} from 'reactflow'

import React from 'react'

const Background: React.FC<BackgroundProps> = (props) => {
    return (
        <BgReactFlow
            variant={BackgroundVariant.Dots}
            gap={10}
            size={1}
            color="#cdcdcd"
            {...props}
        />
    )
}

export default Background
