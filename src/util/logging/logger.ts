export enum LogLevel {
	TRACE = 1,
	DEBUG = 2,
	INFO = 3,
	WARN = 4,
	ERROR = 5,
}

type LogFn = (message: unknown, ...parameters: unknown[]) => void

export interface Logger {
	setLevel(level: LogLevel): void
	trace: LogFn
	debug: LogFn
	info: LogFn
	warn: LogFn
	error: LogFn
}

export interface RootLogger extends Logger {
	getLogger(name: string): Logger
	setDefaultLevel(level: LogLevel): void
}

let logger: RootLogger

export function setLogger(l: RootLogger): RootLogger {
	logger = l
	return logger
}

export function getLogger(name?: string): Logger {
	return name ? logger.getLogger(name) : logger
}
