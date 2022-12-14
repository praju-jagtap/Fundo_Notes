/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

/**
 * Controller to get a single notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createNote = async (req, res, next) => {
    try {
        const data = await NoteService.createNote(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Notes Created Successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get all notes available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNotes = async (req, res, next) => {
    try {
        const data = await NoteService.getAllNotes(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All notes fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to getNote for particular user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNoteByID = async (req, res, next) => {
    try {
        const data = await NoteService.getNoteByID(req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Note fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
* Controller to update a note
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const updateNoteByID = async (req, res, next) => {
    try {
        const data = await NoteService.updateNoteByID(req.params._id, req.body.userID,req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Note updated successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to delete a Note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteNoteByID = async (req, res, next) => {
    try {
        await NoteService.deleteNoteByID(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: [],
            message: 'Note deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to archive a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const archiveNote = async (req, res, next) => {
    try {
        const data = await NoteService.archiveNote(req.params._id);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Note Archived successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to archive a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const trashNote = async (req, res, next) => {
    try {
        const data = await NoteService.trashNote(req.params._id);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Note Trash successfully'
        });
    } catch (error) {
        next(error);
    }
};
