type TWindDirection = (
    'N' | 'NNE' | 'NE' | 'NE' | 'ENE' | 'E' | 'ESE' | 'SE' | 'SSE' |
    'S' | 'SSW' | 'SW' | 'WSW' | 'W' | 'WNW' | 'NW' | 'NNW' | 'N/A'
)
export const windDirection = (deg: number = 0): TWindDirection => {
    switch (true) {
        case deg >= 348.75 && deg < 11.25:
            return 'N';
            break;
        case deg >= 11.25 && deg < 33.75:
            return 'NNE';
            break;
        case deg >= 33.75 && deg < 56.25:
            return 'NE';
            break;
        case deg >= 56.25 && deg < 78.75:
            return 'ENE';
            break;
        case deg >= 78.75 && deg < 101.25:
            return 'E';
            break;
        case deg >= 101.25 && deg < 123.75:
            return 'ESE';
            break;
        case deg >= 123.75 && deg < 146.25:
            return 'SE';
            break;
        case deg >= 146.25 && deg < 168.75:
            return 'SSE';
            break;
        case deg >= 168.75 && deg < 191.25:
            return 'S';
            break;
        case deg >= 191.25 && deg < 213.75:
            return 'SSW';
            break;
        case deg >= 213.75 && deg < 236.25:
            return 'SW';
            break;
        case deg >= 236.25 && deg < 258.75:
            return 'WSW';
            break;
        case deg >= 258.75 && deg < 281.25:
            return 'W';
            break;
        case deg >= 281.25 && deg < 303.75:
            return 'WNW';
            break;
        case deg >= 303.75 && deg < 326.25:
            return 'NW';
            break;
        case deg >= 326.25 && deg < 348.75:
            return 'NNW';
            break;
        default:
            return 'N/A';
            break;
    }
}
