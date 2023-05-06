/* Composant à afficher en cas de recherche sans résultat */
const NoResult = () => {
  return (
      <tr>
        <td colSpan={7} className="text-center border-2 border-gray-300">
        <div className="px-4 py-2 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="100" height="100"
                viewBox="0 0 80 80">
                <path d="M 50 7 C 37.309295 7 27 17.309295 27 30 C 27 35.09327 28.66406 39.799667 31.472656 43.613281 L 27.226562 47.859375 C 26.886955 47.732969 26.530523 47.662109 26.171875 47.662109 C 25.40209 47.662109 24.632318 47.95362 24.050781 48.535156 L 7.8789062 64.707031 C 6.7158333 65.870104 6.7158333 67.786146 7.8789062 68.949219 L 11.050781 72.121094 C 12.213854 73.284167 14.129896 73.284167 15.292969 72.121094 L 31.464844 55.949219 C 32.31717 55.096893 32.537784 53.842043 32.140625 52.773438 L 36.386719 48.527344 C 40.200333 51.33594 44.90673 53 50 53 C 62.690705 53 73 42.690705 73 30 C 73 17.309295 62.690705 7 50 7 z M 50 9 C 61.609824 9 71 18.390176 71 30 C 71 41.609824 61.609824 51 50 51 C 38.390176 51 29 41.609824 29 30 C 29 18.390176 38.390176 9 50 9 z M 50 11 A 1 1 0 0 0 49 12 A 1 1 0 0 0 50 13 A 1 1 0 0 0 51 12 A 1 1 0 0 0 50 11 z M 45.339844 11.613281 A 1 1 0 0 0 44.339844 12.613281 A 1 1 0 0 0 45.339844 13.613281 A 1 1 0 0 0 46.339844 12.613281 A 1 1 0 0 0 45.339844 11.613281 z M 54.65625 11.613281 A 1 1 0 0 0 53.65625 12.613281 A 1 1 0 0 0 54.65625 13.613281 A 1 1 0 0 0 55.65625 12.613281 A 1 1 0 0 0 54.65625 11.613281 z M 40.998047 13.412109 A 1 1 0 0 0 39.998047 14.412109 A 1 1 0 0 0 40.998047 15.412109 A 1 1 0 0 0 41.998047 14.412109 A 1 1 0 0 0 40.998047 13.412109 z M 59 13.412109 A 1 1 0 0 0 58 14.412109 A 1 1 0 0 0 59 15.412109 A 1 1 0 0 0 60 14.412109 A 1 1 0 0 0 59 13.412109 z M 37.271484 16.271484 A 1 1 0 0 0 36.271484 17.271484 A 1 1 0 0 0 37.271484 18.271484 A 1 1 0 0 0 38.271484 17.271484 A 1 1 0 0 0 37.271484 16.271484 z M 62.726562 16.271484 A 1 1 0 0 0 61.726562 17.271484 A 1 1 0 0 0 62.726562 18.271484 A 1 1 0 0 0 63.726562 17.271484 A 1 1 0 0 0 62.726562 16.271484 z M 65.585938 20 A 1 1 0 0 0 64.585938 21 A 1 1 0 0 0 65.585938 22 A 1 1 0 0 0 66.585938 21 A 1 1 0 0 0 65.585938 20 z M 34.410156 20.001953 A 1 1 0 0 0 33.410156 21.001953 A 1 1 0 0 0 34.410156 22.001953 A 1 1 0 0 0 35.410156 21.001953 A 1 1 0 0 0 34.410156 20.001953 z M 43 23 C 41.35499 23 40 24.35499 40 26 C 40 27.64501 41.35499 29 43 29 C 44.64501 29 46 27.64501 46 26 C 46 24.35499 44.64501 23 43 23 z M 57 23 C 55.35499 23 54 24.35499 54 26 C 54 27.64501 55.35499 29 57 29 C 58.64501 29 60 27.64501 60 26 C 60 24.35499 58.64501 23 57 23 z M 32.611328 24.341797 A 1 1 0 0 0 31.611328 25.341797 A 1 1 0 0 0 32.611328 26.341797 A 1 1 0 0 0 33.611328 25.341797 A 1 1 0 0 0 32.611328 24.341797 z M 67.384766 24.341797 A 1 1 0 0 0 66.384766 25.341797 A 1 1 0 0 0 67.384766 26.341797 A 1 1 0 0 0 68.384766 25.341797 A 1 1 0 0 0 67.384766 24.341797 z M 43 25 C 43.564129 25 44 25.435871 44 26 C 44 26.564129 43.564129 27 43 27 C 42.435871 27 42 26.564129 42 26 C 42 25.435871 42.435871 25 43 25 z M 57 25 C 57.564129 25 58 25.435871 58 26 C 58 26.564129 57.564129 27 57 27 C 56.435871 27 56 26.564129 56 26 C 56 25.435871 56.435871 25 57 25 z M 32 29 A 1 1 0 0 0 31 30 A 1 1 0 0 0 32 31 A 1 1 0 0 0 33 30 A 1 1 0 0 0 32 29 z M 68 29 A 1 1 0 0 0 67 30 A 1 1 0 0 0 68 31 A 1 1 0 0 0 69 30 A 1 1 0 0 0 68 29 z M 32.611328 33.658203 A 1 1 0 0 0 31.611328 34.658203 A 1 1 0 0 0 32.611328 35.658203 A 1 1 0 0 0 33.611328 34.658203 A 1 1 0 0 0 32.611328 33.658203 z M 67.384766 33.660156 A 1 1 0 0 0 66.384766 34.660156 A 1 1 0 0 0 67.384766 35.660156 A 1 1 0 0 0 68.384766 34.660156 A 1 1 0 0 0 67.384766 33.660156 z M 50 34 C 46.337246 34 43.080194 35.76886 40.925781 38.359375 L 42.462891 39.638672 C 44.270478 37.465187 46.982754 36 50 36 C 53.017246 36 55.729522 37.465187 57.537109 39.638672 L 59.074219 38.359375 C 56.919806 35.76886 53.662754 34 50 34 z M 34.410156 37.998047 A 1 1 0 0 0 33.410156 38.998047 A 1 1 0 0 0 34.410156 39.998047 A 1 1 0 0 0 35.410156 38.998047 A 1 1 0 0 0 34.410156 37.998047 z M 65.587891 38.001953 A 1 1 0 0 0 64.587891 39.001953 A 1 1 0 0 0 65.587891 40.001953 A 1 1 0 0 0 66.587891 39.001953 A 1 1 0 0 0 65.587891 38.001953 z M 37.271484 41.728516 A 1 1 0 0 0 36.271484 42.728516 A 1 1 0 0 0 37.271484 43.728516 A 1 1 0 0 0 38.271484 42.728516 A 1 1 0 0 0 37.271484 41.728516 z M 62.726562 41.728516 A 1 1 0 0 0 61.726562 42.728516 A 1 1 0 0 0 62.726562 43.728516 A 1 1 0 0 0 63.726562 42.728516 A 1 1 0 0 0 62.726562 41.728516 z M 58.998047 44.587891 A 1 1 0 0 0 57.998047 45.587891 A 1 1 0 0 0 58.998047 46.587891 A 1 1 0 0 0 59.998047 45.587891 A 1 1 0 0 0 58.998047 44.587891 z M 40.998047 44.589844 A 1 1 0 0 0 39.998047 45.589844 A 1 1 0 0 0 40.998047 46.589844 A 1 1 0 0 0 41.998047 45.589844 A 1 1 0 0 0 40.998047 44.589844 z M 32.734375 45.179688 C 33.384782 45.918716 34.081284 46.615218 34.820312 47.265625 L 30.921875 51.164062 L 28.835938 49.078125 L 32.734375 45.179688 z M 45.339844 46.386719 A 1 1 0 0 0 44.339844 47.386719 A 1 1 0 0 0 45.339844 48.386719 A 1 1 0 0 0 46.339844 47.386719 A 1 1 0 0 0 45.339844 46.386719 z M 54.65625 46.386719 A 1 1 0 0 0 53.65625 47.386719 A 1 1 0 0 0 54.65625 48.386719 A 1 1 0 0 0 55.65625 47.386719 A 1 1 0 0 0 54.65625 46.386719 z M 50 47 A 1 1 0 0 0 49 48 A 1 1 0 0 0 50 49 A 1 1 0 0 0 51 48 A 1 1 0 0 0 50 47 z M 26.171875 49.650391 C 26.42559 49.650391 26.67749 49.749751 26.876953 49.949219 L 30.050781 53.121094 C 30.449406 53.519719 30.447916 54.138021 30.050781 54.535156 L 13.878906 70.707031 C 13.479979 71.105958 12.863771 71.105958 12.464844 70.707031 L 9.2929688 67.535156 C 8.8940417 67.136229 8.8940417 66.520021 9.2929688 66.121094 L 11 64.414062 L 13.292969 66.707031 L 14.707031 65.292969 L 12.414062 63 L 14 61.414062 L 16.292969 63.707031 L 17.707031 62.292969 L 15.414062 60 L 17 58.414062 L 19.292969 60.707031 L 20.707031 59.292969 L 18.414062 57 L 20 55.414062 L 22.292969 57.707031 L 23.707031 56.292969 L 21.414062 54 L 23 52.414062 L 25.292969 54.707031 L 26.707031 53.292969 L 24.414062 51 L 25.464844 49.949219 C 25.664307 49.749755 25.91816 49.650391 26.171875 49.650391 z"></path>
            </svg>
            <span className="text-4xl text-red-500">Aucun résultat</span>
        </div>
        </td>
      </tr>
  )
}

export default NoResult