import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNoficationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNoficationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
