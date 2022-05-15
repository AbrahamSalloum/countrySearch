import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'

export default function Country() {
    const router = useRouter()
    const { country } = router.query

    return(
        <b>
            {country}
        </b>
    )

}