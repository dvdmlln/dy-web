import { setLogger, LogLevel } from '@/util/logging/logger'
import loglevel from '@/util/logging/loglevel'

const rootLogger = setLogger(loglevel)
rootLogger.setDefaultLevel(
	process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.WARN,
)
