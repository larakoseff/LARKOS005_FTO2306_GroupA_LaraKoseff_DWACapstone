import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

  const supabase = createClient("https://wutfxsafiwepfofhhzxr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dGZ4c2FmaXdlcGZvZmhoenhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDE3MzEsImV4cCI6MjAxNjkxNzczMX0.84qvShycrQ9NDSStNwLOSL7dL4JhTVSAAj5Wv88UeGc");

  const customTheme = {
    default: {
      colors: {
        brand: 'hsl(153 60.0% 53.0%)',
        brandAccent: 'hsl(154 54.8% 45.1%)',
        brandButtonText: 'white',
        // ..
      },
    },
    dark: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: '#2e2e2e',
        defaultButtonBackgroundHover: '#3e3e3e',
        //..
      },
    },
    // You can also add more theme variations with different names.
    evenDarker: {
      colors: {
        brandButtonText: 'white',
        defaultButtonBackground: '#1e1e1e',
        defaultButtonBackgroundHover: '#2e2e2e',
        //..
      },
    },
  }

  export default function Supabase() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (
        <>
        <br />
        <br />
        <br />
        <br />
        <div className="section--heading">
          <p>Signin with Supabase</p>
          <img src="../images/box-white.svg" className="tc--icon" />
        </div>
        <div className='supabase--container'>
        <Auth
    supabaseClient={supabase}
    appearance={{
      theme: ThemeSupa,
      variables: {
        default: {
          colors: {
            brand: 'plum',
            brandAccent: '#7600ff',
          },
          fonts: {
            bodyFontFamily: `"Outfit", sans-serif`,
            buttonFontFamily: `"Outfit", sans-serif`,
            inputFontFamily: `"Outfit", sans-serif`,
            labelFontFamily: `"Outfit", sans-serif`,
          },
        },
      },
    }}
  />
  </div>
      </>
      )
    }
    else {
      return (<div>Logged in!</div>)
    }
  }