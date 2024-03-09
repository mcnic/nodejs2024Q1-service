import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/users/user.module';
import { TrackModule } from './components/tracks/track.module';
import { ArtistModule } from './components/artists/artist.module';
import { AlbumModule } from './components/albums/album.module';
import { FavoriteModule } from './components/favorites/favorite.module';

@Module({
  imports: [UserModule, TrackModule, ArtistModule, AlbumModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
