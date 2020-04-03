import loglevel from 'loglevel'
import { Logger, LogLevel, RootLogger } from './logger'

const levelMapping = {
	[LogLevel.TRACE]: loglevel.levels.TRACE,
	[LogLevel.DEBUG]: loglevel.levels.DEBUG,
	[LogLevel.INFO]: loglevel.levels.INFO,
	[LogLevel.WARN]: loglevel.levels.WARN,
	[LogLevel.ERROR]: loglevel.levels.ERROR,
}

function getPrefix(name?: string): string {
	return `${new Date().toISOString().split('.')[0]} ${
		name ? `[${name}]` : ''
	}`
}

function convertLogger(loglevelLogger: loglevel.Logger, name?: string): Logger {
	return {
		setLevel(level: LogLevel) {
			loglevelLogger.setLevel(levelMapping[level])
		},

		trace(message: unknown, ...parameters: unknown[]) {
			loglevelLogger.trace(getPrefix(name), message, ...parameters)
		},

		debug(message: unknown, ...parameters: unknown[]) {
			loglevelLogger.debug(getPrefix(name), message, ...parameters)
		},

		warn(message: unknown, ...parameters: unknown[]) {
			loglevelLogger.warn(getPrefix(name), message, ...parameters)
		},

		error(message: unknown, ...parameters: unknown[]) {
			loglevelLogger.error(getPrefix(name), message, ...parameters)
		},

		info(message: unknown, ...parameters: unknown[]) {
			loglevelLogger.info(getPrefix(name), message, ...parameters)
		},
	}
}

const logger: RootLogger = Object.assign(
	{
		getLogger: (name: string) => {
			return convertLogger(loglevel.getLogger(name), name)
		},
		setDefaultLevel: (level: LogLevel) => {
			loglevel.setDefaultLevel(levelMapping[level])
		},
	},
	convertLogger(loglevel),
)

export default logger
