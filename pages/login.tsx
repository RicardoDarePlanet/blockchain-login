import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'
import LoginMetamask from '@/components/LoginMetamask'


export default function Login() {

  return (
    <>
      <Head>
        <title>Blockchain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">
            Iniciar sesión
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
          >
            Iniciar sesión
          </button>
          <LoginMetamask></LoginMetamask>
          <div className="mt-8">
            <Link href="/register" className="text-indigo-500 hover:underline">
              ¿No tienes una cuenta? Regístrate aquí
            </Link>
            <Link href="/" className="block mt-2 text-gray-500 hover:underline">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
