import '@testing-library/jest-dom/extend-expect'
import config from './next.config'

process.env = { ...process.env, ...config.env }
